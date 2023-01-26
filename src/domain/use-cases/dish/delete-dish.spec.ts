import {beforeEach, describe, expect, it, vitest} from "vitest";
import {DishRequest, DishResponse} from "../../entities/dish/dish";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";
import {DeleteDish} from "./delete-dish";

describe('Create Dish Use case', () => {
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

    it('should delete dish', async () => {
        vitest.spyOn(mockDishRepository, "deleteDish").mockImplementation(() => Promise.resolve())
        const deleteDishUseCase = new DeleteDish(mockDishRepository)
        await deleteDishUseCase.execute('12345')

        expect(mockDishRepository.deleteDish).toHaveBeenCalledWith('12345');
    });
});