export interface OrderProps{
    order_id: string;
    dish_id: string;
}

export interface OrderDishRequest {
    order_id: string;
    dish_id: string;
}
export class OrderDishes {
    public order_id: string;
    public dish_id: string;

    constructor(order: OrderProps) {
        Object.assign(this, order);
    }
}
