import {OrderRepository} from "../../repositories/order-repository";
import {Order} from "../../entities/order/order";

export interface OrderRequest {
    table_number: number;
    start_at: Date;
}
export class CreateOrder {
    constructor(private orderRepository: OrderRepository) {}

     async execute(orderRequest: OrderRequest): Promise<Order> {
        const overlappingOrder = await this.orderRepository.findOverlapping(orderRequest.table_number)

         if(overlappingOrder){
             throw new Error('A order with that table number already exists');
         }

         const order = new Order(orderRequest);

        await this.orderRepository.create(order);
        return order;

    }

}