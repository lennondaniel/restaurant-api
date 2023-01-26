import {Dish, DishRequest, DishResponse} from "../../entities/dish/dish";

export interface IDishRepository {
    createDish(dish: DishRequest): void;
    findDish(name: string): Promise<DishResponse | null>;
    showDish(id: string): Promise<DishResponse>;
    updateDish(id: string, dish: DishRequest): void;
    deleteDish(id: string): void;
}