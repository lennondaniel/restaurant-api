import {expect, test} from "vitest";
import {OrderDishes} from "./orderDishes";
import {Order} from "../order/order";
import {CategoryDish, Dish} from "../dish/dish";

test('create a new order dishes', () => {
    const order = new Order({
        table_number: 10,
        start_at: new Date(),
    });

    const dish = new Dish({
        id: '12345',
        name: 'Salada',
        image: 'foto-salada.jpg',
        description: 'Salada com tomate, alface e frango',
        price: 30.00,
        category: CategoryDish.MAIN,
        status: true
    });

    const orderDish = new OrderDishes({
        order_id: order.id,
        dish_id: dish.id
    });

    expect(orderDish).toBeInstanceOf(OrderDishes);
})