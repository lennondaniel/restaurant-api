import {Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

export class UpdateStatusDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(id: string): Promise<Dish> {
        return await this.dishRepository.updateStatus(id);
    }
}