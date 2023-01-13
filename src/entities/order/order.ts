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
        if (!order.id) {
            this.id = crypto.randomUUID();
        }
        if (!order.status) {
            this.status = true;
        }
        Object.assign(this, order);
    }
}