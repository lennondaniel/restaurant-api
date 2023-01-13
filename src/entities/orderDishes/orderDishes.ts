export class OrderDishes {
    public order_id: string;
    public dish_id: string;

    constructor(order_id: string, dish_id: string) {
        this.order_id = order_id;
        this.dish_id = dish_id;
    }
}