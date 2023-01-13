import {Order} from "../entities/order/order";

export interface OrderRepository {
    findOverlapping(table_number: number): Promise<Order | null>;
    create(order: Order): Promise<Order>;
}