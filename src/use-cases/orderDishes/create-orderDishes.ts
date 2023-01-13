import {OrderDishesRepository} from "../../repositories/orderDishes-repository";
import {OrderDishes} from "../../entities/orderDishes/orderDishes";

export class CreateOrderDishes {
    constructor(private orderDishesRepository: OrderDishesRepository) {}
     execute(order_id: string, dish_id:string): Promise<OrderDishes> {
        const orderDishes = new OrderDishes(order_id, dish_id);
        return this.orderDishesRepository.create(orderDishes);
    }
}