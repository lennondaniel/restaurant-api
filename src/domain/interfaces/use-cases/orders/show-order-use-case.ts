import {OrderResponse} from "../../../entities/order/order";

export interface ShowOrderUseCase {
    execute(id: string): Promise<OrderResponse>;
}