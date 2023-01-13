import {describe, expect, it} from "vitest";
import {OrderInMemoryRepository} from "../../repositories/in-memory/order-in-memory-repository";
import {OrderDishesInMemoryRepository} from "../../repositories/in-memory/orderDishes-in-memory-repository";
import {CreateOrderDishes} from "./create-orderDishes";
import {OrderDishes} from "../../entities/orderDishes/orderDishes";
import {DishInMemoryRepository} from "../../repositories/in-memory/dish-in-memory-repository";
import {CreateDish} from "../dish/create-dish";
import {CreateOrder} from "../order/create-order";

describe('Create Order Dishes', () => {
    it('should be able to create an order dishes', async () => {
        const dishRepository = new DishInMemoryRepository()
        const createDish = new CreateDish(dishRepository);

        const dish = await createDish.execute({
            name: 'Salada',
            image: 'imagem.jpg',
            description: 'teste',
            price: 30.00
        });

        const orderRepository = new OrderInMemoryRepository()
        const createOrder = new CreateOrder(orderRepository);

        const order = await createOrder.execute( {
            table_number: 10,
            start_at: new Date()
        });
        const orderDishesRepository = new OrderDishesInMemoryRepository()
        const createOrderDishes = new CreateOrderDishes(orderDishesRepository);

        expect(createOrderDishes.execute(order.id, dish.id))
            .resolves.toBeInstanceOf(OrderDishes);
    });
});