import {describe, expect, it} from "vitest";
import {CreateDish} from "../dish/create-dish";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {MenuInMemoryRepository} from "../../repositories/in-memory/menu-in-memory-repository";
import {AddDishToMenu} from "./add-dish-to-menu";
import {Category, Menu} from "../../entities/menu/menu";
import {RemoveDishToMenu} from "./remove-dish-to-menu";

describe('Delete Dish to menu', () => {
    it('should be able to delete an dish to menu', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const dish2 = await createDish.execute({
            name: 'Salada1',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const menuRepository = new MenuInMemoryRepository();
        const addDishToMenu = new AddDishToMenu(menuRepository);
        const removeDishToMenu = new RemoveDishToMenu(menuRepository);
        await addDishToMenu.execute(dish.id, Category.APPETIZER);
        await addDishToMenu.execute(dish2.id, Category.APPETIZER);

        const dishRemovedToMenu = await removeDishToMenu.execute(dish.id);

        expect(dishRemovedToMenu[0]).toBeInstanceOf(Menu)
        expect(dishRemovedToMenu[0].deleted_at).to.not.equal(null);
    });
});