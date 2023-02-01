import {DishResponse} from "../../entities/dish/dish";
import {FindDishUseCase} from "../../interfaces/use-cases/dishes/find-dish-use-case";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class FindDish implements FindDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(name: string): Promise<DishResponse | null> {
       return await this.dishRepository.findDish(name);
    }
}
