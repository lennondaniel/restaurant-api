import {expect, test} from "vitest";
import {Category, Menu} from "./menu";
import {Dish} from "./dish";
import * as crypto from "crypto";

test('create a new menu option', () => {
    const dish = new Dish({
        id: crypto.randomUUID(),
        name: 'Salada',
        image: 'foto-salada.jpg',
        description: 'Salada com tomate, alface e frango',
        price: 30.00
    });
    const menu = new Menu({
        dish_id: 'Salada',
        category: Category.APPETIZER,
    });

    expect(menu).toBeInstanceOf(Menu);
})