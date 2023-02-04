import {OrderDataSource} from "../interfaces/order-data-source";
import OrderModel from "./sequelize/models/order-model";
import {Order, OrderFilter, OrderRequest, OrderResponse} from "../../../domain/entities/order/order";

export class OrderPostgresDataSource implements OrderDataSource{

    async close(id: string) {
        await OrderModel.update(
            {
                status: false,
                end_at: Date()
            }, {
                where: { id: id }
            }
        )
    }

    async create({table_number}: OrderRequest) {
        await OrderModel.create({
            table_number: table_number
        });
    }

    async getAll({status, start_at}: OrderFilter): Promise<OrderResponse[] | null> {
        return await OrderModel.findAll({
            where: {
                status: status,
                start_at: start_at
            }
        });
    }

    async show(id: string): Promise<OrderResponse | null> {
        return await OrderModel.findByPk(id);
    }

}
