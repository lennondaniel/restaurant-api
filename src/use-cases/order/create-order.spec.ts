import {describe, expect, it} from "vitest";
import {OrderInMemoryRepository} from "../../repositories/in-memory/order-in-memory-repository";
import {CreateOrder} from "./create-order";
import {Order} from "../../entities/order/order";

describe('Create Order', () => {
    it('should be able to create an order', () => {
        const orderRepository = new OrderInMemoryRepository()
        const createOrder = new CreateOrder(orderRepository);

        expect(createOrder.execute({
            table_number: 10,
            start_at: new Date()
        })).resolves.toBeInstanceOf(Order);
    });

    it('not should be able to create a order table number is equal', async () => {
        const orderRepository = new OrderInMemoryRepository()
        const createOrder = new CreateOrder(orderRepository);

        await createOrder.execute({
            table_number: 10,
            start_at: new Date()
        });

        expect(createOrder.execute({
            table_number: 10,
            start_at: new Date()
        })).rejects.toBeInstanceOf(Error);
    });
});