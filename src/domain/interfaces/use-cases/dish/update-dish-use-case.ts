import {DishRequest} from "../../../entities/dish/dish";

export interface UpdateDishUseCase {
    execute(id: string, dish: DishRequest): void;
}