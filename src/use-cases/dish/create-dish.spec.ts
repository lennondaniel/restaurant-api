import {describe, expect, it} from "vitest";
import {CreateDish} from "./create-dish";
import {CategoryDish, Dish} from "../../entities/dish/dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";

describe('Create Dish', () => {
    it('should be able to create an dish', () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        expect(createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        })).resolves.toBeInstanceOf(Dish);
    });

    it('not should be able to create a dish name equal', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        });

        expect(createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00,
            status: true,
            category: CategoryDish.DESSERT
        })).rejects.toBeInstanceOf(Error);
    });
});