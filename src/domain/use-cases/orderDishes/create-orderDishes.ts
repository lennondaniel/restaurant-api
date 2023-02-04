import {IOrderDishesRepository} from "../../interfaces/repositories/orderDishes-repository";
import {OrderDishes, OrderDishRequest} from "../../entities/orderDishes/orderDishes";

export class CreateOrderDishes {
    constructor(private orderDishesRepository: IOrderDishesRepository) {}
     async execute(orderDish: OrderDishRequest) {
        await this.orderDishesRepository.createOrderDish(orderDish);
    }
}
