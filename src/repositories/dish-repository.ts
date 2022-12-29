import {Dish} from "../entities/dish/dish";

export interface DishRepository {
    create(dish: Dish): Promise<void>
    findOverlapping(name: string): Promise<Dish | null>
}