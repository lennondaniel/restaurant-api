import { DishResponse } from "../../../entities/dish/dish";

export interface ShowDishUseCase {
    execute(id: string): Promise<DishResponse | null>;
}