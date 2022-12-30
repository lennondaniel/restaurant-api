import {describe, expect, it} from "vitest";
import {CreateDish} from "./create-dish";
import {ShowDish} from './show-dish'
import {Dish} from "../../entities/dish/dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";

describe('Show Dish', () => {
    it('should be able to show an dish', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const showDish = new ShowDish(dishRepository);
        const dishFound = await showDish.execute(dish.id);

        expect(dishFound).toBeInstanceOf(Dish);
        expect(dishFound.name).toEqual('Salada');
    });

    it('should be able to not show an dish', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const showDish = new ShowDish(dishRepository);

        expect(showDish.execute('id')).rejects.toBeInstanceOf(Error);
    });

});