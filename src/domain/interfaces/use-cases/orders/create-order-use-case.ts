import {OrderRequest} from "../../../entities/order/order";

export interface CreateOrderUseCase {
    execute(order: OrderRequest): void;
}