import {Order} from "../../entities/order/order";
import {OrderDishes, OrderDishRequest} from "../../entities/orderDishes/orderDishes";
export interface IOrderDishesRepository {
    createOrderDish(orderDish: OrderDishRequest): void;
}
