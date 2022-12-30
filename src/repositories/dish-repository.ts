import {Dish} from "../entities/dish/dish";

export interface DishRepository {
    create(dish: Dish): Promise<void>;
    findOverlapping(name: string, id?: string): Promise<Dish | null>;
    show(id: string): Promise<Dish>;
    update(id: string, dish: Dish): Promise<Dish>;
    updateStatus(id: string): Promise<Dish>;
    delete(id: string): Promise<Dish>;
}