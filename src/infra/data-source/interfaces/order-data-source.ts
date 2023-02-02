import {OrderFilter, OrderRequest, OrderResponse} from "../../../domain/entities/order/order";

export interface OrderDataSource {
    create(order: OrderRequest): void;
    show(id: string): Promise<OrderResponse | null>;
    getAll(orderFilter: OrderFilter): Promise<OrderResponse[] | null>;
    close(id: string): void;
}
