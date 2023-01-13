import * as crypto from "crypto";

export interface OrderProps {
    id?: string;
    table_number: number;
    status?: boolean;
    start_at: Date;
    end_at?: Date;
}
export class Order {
    public id?: string;
    public table_number: number;
    public status?: boolean;
    public start_at: Date;
    public end_at?: Date;

    constructor(order: OrderProps) {
        Object.assign(this, order);
        if (!order.id) {
            this.id = crypto.randomUUID();
        }
    }
}