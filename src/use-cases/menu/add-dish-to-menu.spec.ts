import {describe, expect, it} from "vitest";
import {MenuInMemoryRepository} from "../../repositories/in-memory/menu-in-memory-repository";
import {AddDishToMenu} from "./add-dish-to-menu";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {CreateDish} from "../dish/create-dish";
import {Category, Menu} from "../../entities/menu/menu";

describe('Add dish to menu', () => {
    it('should be able it add dish to menu', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const menuRepository = new MenuInMemoryRepository();
        const addDishToMenu = new AddDishToMenu(menuRepository)

        expect(addDishToMenu.execute(dish.id, Category.APPETIZER)).resolves.toBeInstanceOf(Menu)

    })
})