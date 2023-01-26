import {OrderDishesRepository} from "../../interfaces/repositories/orderDishes-repository";
import {OrderDishes} from "../../entities/orderDishes/orderDishes";

export interface OrderDishesRequest {
    order_id: string;
    dish_id: string;
}
export class CreateOrderDishes {
    constructor(private orderDishesRepository: OrderDishesRepository) {}
     execute(orderDishesRequest: OrderDishesRequest): Promise<OrderDishes> {
        const orderDishes = new OrderDishes(orderDishesRequest);
        return this.orderDishesRepository.create(orderDishes);
    }
}