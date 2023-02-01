import {DishResponse} from "../../entities/dish/dish";
import {ShowDishUseCase} from "../../interfaces/use-cases/dishes/show-dish-use-case";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class ShowDish  implements ShowDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(id: string): Promise<DishResponse> {
        return await this.dishRepository.showDish(id);
    }
}
