import {Order, OrderFilter, OrderRequest, OrderResponse} from "../../entities/order/order";

export interface IOrderRepository {
    createOrder(order: Order): void;
    getOrders(orderFilter: OrderFilter): Promise<OrderResponse[]>;
    showOrder(id: string): Promise<OrderResponse>;
    closeOrder(id: string): void;
}