import {Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

export class DeleteDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(id: string): Promise<Dish> {
        return await this.dishRepository.delete(id);
    }
}