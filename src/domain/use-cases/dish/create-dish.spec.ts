import {beforeEach, describe, expect, it, vitest} from "vitest";
import {CreateDish} from "./create-dish";
import {CategoryDish, DishRequest, DishResponse} from "../../entities/dish/dish";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";

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

    it('should return true', async () => {
        vitest.spyOn(mockDishRepository, "createDish").mockImplementation(() => Promise.resolve(true))
        const createDishUseCase = new CreateDish(mockDishRepository)
        await createDishUseCase.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        })

        expect(mockDishRepository.createDish).toBeCalledTimes(1);
    });
});