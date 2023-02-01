import {Dish, DishRequest} from "../../entities/dish/dish";
import {CreateDishUseCase} from "../../interfaces/use-cases/dishes/create-dish-use-case";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class CreateDish implements CreateDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(createDish: DishRequest) {
        const dish = new Dish(createDish);

        await this.dishRepository.createDish(dish);
    }
}
