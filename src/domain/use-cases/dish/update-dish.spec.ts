import {beforeEach, describe, expect, it, vitest} from "vitest";
import {CreateDish} from "./create-dish";
import {CategoryDish, DishRequest, DishResponse} from "../../entities/dish/dish";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";
import {UpdateDish} from "./update-dish";

describe('Update Dish Use case', () => {
    class MockDishRepository implements IDishRepository {
        createDish(dish: DishRequest): void {
            throw new Error('Method not implemented');
        }
        deleteDish(id: string): void {
            throw new Error('Method not implemented');
        }
        findDish(name: string): Promise<DishResponse | null> {
            throw new Error('Method not implemented');
        }
        showDish(id: string): Promise<DishResponse> {
            throw new Error('Method not implemented');
        }
        updateDish(id: string, dish: DishRequest): void {
            throw new Error('Method not implemented');
        }
    }

    let mockDishRepository: IDishRepository

    beforeEach(() => {
        vitest.clearAllMocks();
        mockDishRepository = new MockDishRepository();
    })

    it('should update dish', async () => {
        vitest.spyOn(mockDishRepository, "updateDish").mockImplementation(() => Promise.resolve(true))
        const updateDishUseCase = new UpdateDish(mockDishRepository)
        await updateDishUseCase.execute('12345', {
            name: 'Salada2',
            image: 'imagem.jpg',
            description: 'teste2',
            price: 30.00,
            status: true,
            category: CategoryDish.MAIN
        })

        expect(mockDishRepository.updateDish).toBeCalledTimes(1);
    });
});