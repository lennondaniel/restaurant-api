import {Dish} from "../../entities/dish/dish";
import * as crypto from "crypto";
import {DishRepository} from "../../repositories/dish-repository";

interface UpdateDishRequest {
    name: string;
    image: string;
    description: string;
    price: number
}

export class UpdateDish {
    constructor(private dishRepository: DishRepository) {}
    async execute(id: string, {name, image, description, price}: UpdateDishRequest): Promise<Dish> {
        const overlappingDish = await this.dishRepository.findOverlapping(name, id);

        if(overlappingDish){
            throw new Error('A dish with that name already exists');
        }

        const dish = new Dish({
            name,
            image,
            description,
            price
        });

        await this.dishRepository.update(id, dish);

        return dish;
    }
}