
export enum CategoryDish {
    APPETIZER = 'appetizer',
    MAIN = 'main',
    DESSERT = 'dessert',
    DRINKS = 'drinks'
}
export interface DishRequest {
    name: string;
    image: string;
    description: string;
    price: number;
    status?: boolean;
    category: CategoryDish;
}

export interface DishResponse {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    status: boolean;
    category: CategoryDish;
}

export interface DishProps {
    id?: string;
    name: string;
    image: string;
    description: string;
    price: number;
    status?: boolean;
    category?: CategoryDish;
    deleted_at?: Date;
}


export class Dish {
    public id: string;
    public name: string;
    public image: string;
    public description: string;
    public price: number;
    public status: boolean;
    public category: CategoryDish;
    public deleted_at: Date;
    constructor(dish: DishProps) {
        Object.assign(this, dish);
    }
}