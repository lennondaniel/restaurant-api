import {Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

export class ShowDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(id: string): Promise<Dish> {
        const dish = await this.dishRepository.show(id);

        if(!dish){
            throw new Error('Dish not found');
        }

        return dish;
    }
}