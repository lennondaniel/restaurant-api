import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {Order, OrderRequest} from "../../entities/order/order";
import {CreateOrderUseCase} from "../../interfaces/use-cases/orders/create-order-use-case";

export class CreateOrder implements CreateOrderUseCase {
    constructor(private orderRepository: IOrderRepository) {}

     async execute(order: OrderRequest) {
        await this.orderRepository.createOrder(order);

    }
}
