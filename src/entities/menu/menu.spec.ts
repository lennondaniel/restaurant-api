import {expect, test} from "vitest";
import {Category, Menu} from "./menu";
import {Dish} from "../dish/dish";
import * as crypto from "crypto";

test('create a new menu option', () => {
    const dish = new Dish({
        name: 'Salada',
        image: 'foto-salada.jpg',
        description: 'Salada com tomate, alface e frango',
        price: 30.00
    });

    const menu = new Menu({
        dish_id: dish.id,
        category: Category.APPETIZER,
    });

    expect(menu).toBeInstanceOf(Menu);
    expect(dish).toBeInstanceOf(Dish);
})