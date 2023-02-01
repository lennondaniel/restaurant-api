import {OrderFilter, OrderResponse} from "../../../entities/order/order";

export interface GetOrdersUseCases {
    execute(orderFilter: OrderFilter): Promise<OrderResponse[]>;
}