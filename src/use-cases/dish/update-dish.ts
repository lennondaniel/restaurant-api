import {CategoryDish, Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

interface UpdateDishRequest {
    name: string;
    image: string;
    description: string;
    price: number;
    status?: boolean;
    category?: CategoryDish;
}

export class UpdateDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(id: string, dishRequest: UpdateDishRequest): Promise<Dish> {
        const overlappingDish = await this.dishRepository.findOverlapping(dishRequest.name, id);

        if(overlappingDish){
            throw new Error('A dish with that name already exists');
        }

        const dish = new Dish(dishRequest);

        await this.dishRepository.update(id, dish);

        return dish;
    }
}