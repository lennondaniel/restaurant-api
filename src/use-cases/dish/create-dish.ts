import {Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

interface CreateDishRequest {
    name: string;
    image: string;
    description: string;
    price: number
}

type CreateDishResponse = Dish;

export class CreateDish {

    constructor(
        private dishRepository: DishRepository
    ) {
    }
    async execute({name, image, description, price}: CreateDishRequest): Promise<CreateDishResponse> {
        const overlappingDish = await this.dishRepository.findOverlapping(name);

        if(overlappingDish){
            throw new Error('A dish with that name already exists');
        }

        const dish = new Dish({
            name,
            image,
            description,
            price
        });

        await this.dishRepository.create(dish);

        return dish;
    }
}