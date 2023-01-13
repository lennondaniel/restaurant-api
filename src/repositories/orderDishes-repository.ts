import {Order} from "../entities/order/order";
import {OrderDishes} from "../entities/orderDishes/orderDishes";
export interface OrderDishesRepository {
    create(orderDishes: OrderDishes): Promise<OrderDishes>;
}