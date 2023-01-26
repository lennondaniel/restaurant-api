import {OrderRepository} from "../../interfaces/repositories/order-repository";
import {Order} from "../../entities/order/order";

export class ShowOrder {
    constructor(private orderRepository: OrderRepository) {}
    async execute(id: string): Promise<Order>{
        const order = await this.orderRepository.show(id);

        if(!order) {
            throw new Error('not found order');
        }

        return order;
    }
}