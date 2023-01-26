import {OrderRepository} from "../../interfaces/repositories/order-repository";
import {Order} from "../../entities/order/order";

export class CloseOrder {
    constructor(private orderRepository: OrderRepository) {}

    execute(id: string): Promise<Order> {
        return this.orderRepository.close(id);
    }
}