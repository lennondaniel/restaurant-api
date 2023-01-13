 import {OrderRepository} from "../order-repository";
import {Order} from "../../entities/order/order";
 import {Dish} from "../../entities/dish/dish";
 import {OrderDishes} from "../../entities/orderDishes/orderDishes";
 import {OrderDishesRepository} from "../orderDishes-repository";

export class OrderDishesInMemoryRepository implements OrderDishesRepository {
    public ordersDishes: OrderDishes[] = [];
    create(orderDishes: OrderDishes): Promise<OrderDishes> {
        return new Promise((resolve) => {
           this.ordersDishes.push(orderDishes)
            resolve(orderDishes);
        });
    }
}