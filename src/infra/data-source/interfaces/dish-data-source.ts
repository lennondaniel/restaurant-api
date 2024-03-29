import {DishRequest, DishResponse} from "../../../domain/entities/dish/dish";

export interface DishDataSource {
    create(dish: DishRequest): void;
    show(id: string): Promise<DishResponse | null>;
    find(name: string): Promise<DishResponse | null>;
    update(id: string, dish: DishRequest): void;
    delete(id: string): void;
}
