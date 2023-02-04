import {OrderDishes} from "../../entities/orderDishes/orderDishes";
import {OrderDishesRepository} from "../../repositories/orderDishes-repository";

export class OrderDishesPostgresDataSource implements OrderDishesRepository {
    public ordersDishes: OrderDishes[] = [];
    create(orderDishes: OrderDishes): Promise<OrderDishes> {
        return new Promise((resolve) => {
           this.ordersDishes.push(orderDishes)
            resolve(orderDishes);
        });
    }
}
