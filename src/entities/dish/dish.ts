import * as crypto from "crypto";

export interface DishProps {
    id?: string;
    name: string;
    image: string;
    description: string;
    price: number;
    status?: boolean;
    deleted_at?: Date;
}

export class Dish {
    public id: string;
    public name: string;
    public image: string;
    public description: string;
    public price: number;
    public status: boolean;
    public deleted_at: Date;
    constructor(dish: DishProps) {
        Object.assign(this, dish);
        if(!dish.id){
            this.id = crypto.randomUUID();
        }
        if(!dish.status) {
            this.status = true;
        }

    }
}