import {OrderDishRequest} from "../../../entities/orderDishes/orderDishes";

export interface CreateOrderDishesUseCase {
    execute(orderDish: OrderDishRequest): void;
}
