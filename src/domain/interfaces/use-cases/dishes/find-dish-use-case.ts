import { DishResponse } from "../../../entities/dish/dish";

export interface FindDishUseCase {
    execute(name: string, id?: string): Promise<DishResponse | null>;
}