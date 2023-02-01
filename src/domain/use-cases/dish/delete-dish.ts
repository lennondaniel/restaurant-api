import {DeleteDishUseCase} from "../../interfaces/use-cases/dishes/delete-dish-use-case";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

export class DeleteDish implements DeleteDishUseCase{
    constructor(private dishRepository: IDishRepository) {}
    async execute(id: string) {
        await this.dishRepository.deleteDish(id);
    }
}
