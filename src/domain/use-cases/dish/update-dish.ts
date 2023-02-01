import { DishRequest } from "../../entities/dish/dish";
import { UpdateDishUseCase } from "../../interfaces/use-cases/dishes/update-dish-use-case";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class UpdateDish implements UpdateDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(id: string, dish: DishRequest) {
        await this.dishRepository.updateDish(id, dish);
    }
}
