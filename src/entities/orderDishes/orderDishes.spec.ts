import {expect, test} from "vitest";
import {OrderDishes} from "./orderDishes";
import {Order} from "../order/order";
import {Dish} from "../dish/dish";

test('create a new order dish', () => {
    const order = new Order({
        table_number: 10,
        start_at: new Date(),
    });

    const dish = new Dish({
        name: 'Salada',
        image: 'foto-salada.jpg',
        description: 'Salada com tomate, alface e frango',
        price: 30.00
    });

    const orderDish = new OrderDishes(order.id, dish.id);

    expect(orderDish).toBeInstanceOf(OrderDishes);

})