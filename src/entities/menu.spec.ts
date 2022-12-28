import {expect, test} from "vitest";
import {Category, Menu} from "./menu";

test('create a new menu option', () => {
    const menu = new Menu({
        name: 'Salada',
        image: 'foto-salada.jpg',
        category: Category.APPETIZER,
        description: 'Salada com tomate, alface e frango',
        price: 30.00
    });

    expect(menu).toBeInstanceOf(Menu);
})