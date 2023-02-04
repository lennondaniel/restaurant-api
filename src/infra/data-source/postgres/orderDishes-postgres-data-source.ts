import {OrderDishesDataSource} from "../interfaces/orderDishes-data-source";
import OrderDishesModel from "./sequelize/models/orderDishes-model";
import {OrderDishRequest} from "../../../domain/entities/orderDishes/orderDishes";

export class OrderDishesPostgresDataSource implements OrderDishesDataSource {
    async create({order_id, dish_id}: OrderDishRequest) {
        await OrderDishesModel.create({
            order_id: order_id,
            dish_id: dish_id
        });
    }
}
