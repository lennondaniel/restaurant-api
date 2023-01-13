import {OrderRepository} from "../../repositories/order-repository";
import {Order, OrderFilter} from "../../entities/order/order";

export class GetOrder {
    constructor(private orderRepository: OrderRepository) {}
     execute(orderFilter: OrderFilter): Promise<Order[]> {
        return this.orderRepository.get(orderFilter);
    }
}