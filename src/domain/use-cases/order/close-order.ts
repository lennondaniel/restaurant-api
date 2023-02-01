import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {CloseOrderUseCase} from "../../interfaces/use-cases/orders/close-order-use-case";

export class CloseOrder implements CloseOrderUseCase{
    constructor(private orderRepository: IOrderRepository) {}

    async execute(id: string) {
        await this.orderRepository.closeOrder(id);
    }
}