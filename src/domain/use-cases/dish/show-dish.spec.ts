import {beforeEach, describe, expect, it, vitest} from "vitest";
import {CategoryDish, DishRequest, DishResponse} from "../../entities/dish/dish";
import {IDishRepository} from "../../interfaces/repositories/dish-repository";
import {ShowDish} from "./show-dish";

describe('Show Dish Use case', () => {
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
        vitest.spyOn(mockDishRepository, "showDish").mockImplementation(() => Promise.resolve({
            id: '12345',
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        }))
        const showDishUseCase = new ShowDish(mockDishRepository)
        const dish = await showDishUseCase.execute('12345')

        expect(mockDishRepository.showDish).toHaveBeenCalledWith('12345');
        expect(dish).toStrictEqual({
            id: '12345',
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        })
    });
});
