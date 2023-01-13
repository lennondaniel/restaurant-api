 import {OrderRepository} from "../order-repository";
import {Order} from "../../entities/order/order";
 import {Dish} from "../../entities/dish/dish";

export class OrderInMemoryRepository implements OrderRepository {
    public orders: Order[] = [];

    findOverlapping(table_number: number): Promise<Order | null> {
        return new Promise((resolve) => {
            const overlappingOrder = this.orders.find(order => order.table_number === table_number);

            if(!overlappingOrder) {
                resolve(null);
            }

            resolve(overlappingOrder);
        });
    }
    create(order: Order): Promise<Order> {
        return new Promise((resolve) => {
           this.orders.push(order)
             resolve(order);
        });
    }
}