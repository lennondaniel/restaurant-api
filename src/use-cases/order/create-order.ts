import {OrderRepository} from "../../repositories/order-repository";
import {Order} from "../../entities/order/order";

export class CreateOrder {
    constructor(private orderRepository: OrderRepository) {}

     async execute({table_number, start_at}: Order): Promise<Order> {
        const overlappingOrder = await this.orderRepository.findOverlapping(table_number)

         if(overlappingOrder){
             throw new Error('A order with that table number already exists');
         }

         const order = new Order({
            table_number,
            start_at
        });

        await this.orderRepository.create(order);
        return order;

    }

}