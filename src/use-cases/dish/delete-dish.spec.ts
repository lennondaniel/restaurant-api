import {describe, expect, it} from "vitest";
import {CreateDish} from "./create-dish";
import {ShowDish} from './show-dish'
import {Dish} from "../../entities/dish/dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {DeleteDish} from "./delete-dish";

describe('Delete Dish', () => {
    it('should be able to delete an dish', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada1',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const deleteDish = new DeleteDish(dishRepository);
        const dishDelete = await deleteDish.execute(dish.id);

        expect(dishDelete).toBeInstanceOf(Dish);
        expect(dishDelete.deleted_at).to.not.equal(null);
    });
});