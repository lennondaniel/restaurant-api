import {IOrderRepository} from "../interfaces/repositories/order-repository";
import {OrderFilter, OrderRequest, OrderResponse} from "../entities/order/order";
import {OrderDataSource} from "../../infra/data-source/interfaces/order-data-source";

export class OrderRepository implements IOrderRepository {

    constructor(private orderDataSource: OrderDataSource) {}
    async closeOrder(id: string) {
        this.orderDataSource.close(id);
    }

    async createOrder(order: OrderRequest) {
        await this.orderDataSource.create(order);
    }

    async getOrders(orderFilter: OrderFilter): Promise<OrderResponse[]> {
        return await this.orderDataSource.getAll(orderFilter);
    }

    async showOrder(id: string): Promise<OrderResponse> {
        return this.orderDataSource.show(id);
    }
}
