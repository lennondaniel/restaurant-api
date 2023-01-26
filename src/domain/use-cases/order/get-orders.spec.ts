import {afterAll, describe, expect, it} from "vitest";
import {OrderInMemoryRepository} from "../../domain/repositories/in-memory/order-in-memory-repository";
import {CreateOrder} from "./create-order";
import {Order} from "../../entities/order/order";
import {GetOrders} from "./get-orders";

describe('Create Order', async () => {

    const orderRepository = new OrderInMemoryRepository()
    const createOrder = new CreateOrder(orderRepository);
    const date = new Date()
    const order = await createOrder.execute({
        table_number: 10,
        start_at: date,
        status: true
    });

    const getOrder = new GetOrders(orderRepository);

    it('should be able to get orders', async () => {
        const orders = await getOrder.execute({status: null, start_at: null});
        expect(orders[0]).toBeInstanceOf(Order)
        expect(orders[0].table_number).equal(order.table_number)

    });
    it('should be able to get orders filter status false', async () => {
        const orders = await getOrder.execute({status: false, start_at: null});
        expect(orders).empty
    });
    it('should be able to get orders filter status true', async () => {
        const orders = await getOrder.execute({status: true, start_at: null});
        expect(orders[0]).toBeInstanceOf(Order)
        expect(orders[0].table_number).equal(order.table_number)
    });
    it('should be able to get orders filter date', async () => {
        const orders = await getOrder.execute({status: null, start_at: date});
        expect(orders[0]).toBeInstanceOf(Order)
        expect(orders[0].table_number).equal(order.table_number)
    });
});