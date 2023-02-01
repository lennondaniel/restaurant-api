import * as crypto from "crypto";

export interface OrderProps {
    id?: string;
    table_number: number;
    status?: boolean;
    start_at: Date;
    end_at?: Date;
}
export interface OrderFilter {
    status?: boolean;
    start_at?: Date;
}
export interface OrderResponse {
    id: string;
    table_number: number;
    status: boolean;
    start_at: Date;
    end_at: Date;
}
export interface OrderRequest {
    table_number: number;
    start_at: Date;
    status: boolean;
}
export class Order {
    public id?: string;
    public table_number: number;
    public status?: boolean;
    public start_at: Date;
    public end_at?: Date;

    constructor(order: OrderProps) {
        Object.assign(this, order);
    }
}