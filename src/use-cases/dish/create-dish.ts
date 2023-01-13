import {CategoryDish, Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

interface CreateDishRequest {
    name: string;
    image: string;
    description: string;
    price: number
    status: boolean
    category: CategoryDish;
}

type CreateDishResponse = Dish;

export class CreateDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(dishRequest: CreateDishRequest): Promise<CreateDishResponse> {
        const overlappingDish = await this.dishRepository.findOverlapping(dishRequest.name);

        if(overlappingDish){
            throw new Error('A dish with that name already exists');
        }

        const dish = new Dish(dishRequest);

        await this.dishRepository.create(dish);

        return dish;
    }
}