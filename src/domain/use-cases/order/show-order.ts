import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderResponse} from "../../entities/order/order";

export class ShowOrder {
    constructor(private orderRepository: IOrderRepository) {}
    async execute(id: string): Promise<OrderResponse>{
        return await this.orderRepository.showOrder(id);
    }
}
