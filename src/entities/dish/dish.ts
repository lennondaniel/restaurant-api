import * as crypto from "crypto";

export interface DishProps {
    id?: string;
    name: string;
    image: string;
    description: string;
    price: number
}

export class Dish {
    public id: string;
    public name: string;
    public image: string;
    public description: string;
    public price: number
    constructor(dish: DishProps) {
        Object.assign(this, dish);
        if(!dish.id){
            this.id = crypto.randomUUID();
        }

    }
}