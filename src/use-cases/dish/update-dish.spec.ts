import {describe, expect, it} from "vitest";
import {CreateDish} from "./create-dish";
import {Dish} from "../../entities/dish/dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {ShowDish} from "./show-dish";
import {UpdateDish} from "./update-dish";

describe('Update Dish', () => {
    it('should be able to update at dish', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);
        const updateDish = new UpdateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const dishUpdate = await updateDish.execute(dish.id, {
            name: 'Salada atualizado',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });


        expect(dishUpdate).toBeInstanceOf(Dish);
        expect(dishUpdate.name).toEqual('Salada atualizado');
    });
});