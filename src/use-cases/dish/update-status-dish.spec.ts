import {describe, expect, it} from "vitest";
import {CreateDish} from "./create-dish";
import {CategoryDish, Dish} from "../../entities/dish/dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {UpdateStatusDish} from "./update-status-dish";

describe('Update Dish', () => {
    it('should be able to update status at dish', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);
        const updateStatusDish = new UpdateStatusDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.APPETIZER
        });

        const dishUpdate = await updateStatusDish.execute(dish.id);

        expect(dishUpdate).toBeInstanceOf(Dish);
        expect(dishUpdate.status).toEqual(false);
    });
});