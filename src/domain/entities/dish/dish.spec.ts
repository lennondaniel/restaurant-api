import {expect, test} from "vitest";
import {Dish} from "./dish";
import * as crypto from "crypto";

test('create a new menu option', () => {
    const dish = new Dish({
        name: 'Salada',
        image: 'foto-salada.jpg',
        description: 'Salada com tomate, alface e frango',
        price: 30.00
    });

    expect(dish).toBeInstanceOf(Dish);

})