import {Order, OrderFilter} from "../entities/order/order";

export interface OrderRepository {
    findOverlapping(table_number: number): Promise<Order | null>;
    create(order: Order): Promise<Order>;
    get(orderFilter: OrderFilter): Promise<Order[]>;
    show(id: string): Promise<Order>;
    close(id: string): Promise<Order>;
}