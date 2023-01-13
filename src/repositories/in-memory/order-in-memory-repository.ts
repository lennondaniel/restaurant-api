 import {OrderRepository} from "../order-repository";
import {Order, OrderFilter} from "../../entities/order/order";
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

    get(orderFilter: OrderFilter): Promise<Order[]> {

        return new Promise((resolve) => {
            if(orderFilter.status !== null || orderFilter.start_at !== null){
                const orders = this.orders.filter(order => {
                    if(orderFilter.status && !orderFilter.start_at){

                        return order.status === orderFilter.status
                    }
                    if(!orderFilter.status && orderFilter.start_at){
                        return order.start_at === orderFilter.start_at
                    }
                    if(orderFilter.status && orderFilter.start_at){
                        return order.status === orderFilter.status && order.start_at === orderFilter.start_at
                    }
                });

                resolve(orders)
            }

            resolve(this.orders);
        });
    }

}