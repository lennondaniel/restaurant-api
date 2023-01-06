import {describe, expect, it} from "vitest";
import {MenuInMemoryRepository} from "../../repositories/in-memory/menu-in-memory-repository";
import {AddDishToMenu} from "./add-dish-to-menu";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {CreateDish} from "../dish/create-dish";
import {Category, Menu} from "../../entities/menu/menu";
import {GetAllMenu} from "./get-all-menu";

describe('Get all dish to menu', () => {
    it('should be able it get all dish to menu', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const menuRepository = new MenuInMemoryRepository();
        const getAllMenu = new GetAllMenu(menuRepository)
        const addDishToMenu = new AddDishToMenu(menuRepository)

        await addDishToMenu.execute(dish.id, Category.APPETIZER);

        const menu = await getAllMenu.execute();

        expect(menu[0]).toBeInstanceOf(Menu)

    })
})