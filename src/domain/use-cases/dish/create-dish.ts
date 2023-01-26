import {Dish, DishRequest} from "../../entities/dish/dish";
import {CreateDishUseCase} from "../../interfaces/use-cases/dish/create-dish-use-case";
import {DishRepository} from "../../repositories/dish-repository";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class CreateDish implements CreateDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(createDish: DishRequest) {
        const dish = new Dish(createDish);

        await this.dishRepository.createDish(dish);
    }
}