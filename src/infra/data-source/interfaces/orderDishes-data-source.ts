import {OrderDishRequest} from "../../../domain/entities/orderDishes/orderDishes";

export interface OrderDishesDataSource {
    create(orderDish: OrderDishRequest): void;
}
