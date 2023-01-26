import { DishRequest } from "../../../entities/dish/dish";

export interface CreateDishUseCase {
    execute(dish: DishRequest): void;
}