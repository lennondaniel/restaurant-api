import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderFilter, OrderResponse} from "../../entities/order/order";
import {GetOrdersUseCases} from "../../interfaces/use-cases/orders/get-orders-use-cases";

export class GetOrders implements GetOrdersUseCases{
    constructor(private orderRepository: IOrderRepository) {}
     async execute(orderFilter: OrderFilter): Promise<OrderResponse[]> {
        return await this.orderRepository.getOrders(orderFilter);
    }
}
