import {afterAll, describe, expect, it} from "vitest";
import {OrderInMemoryRepository} from "../../repositories/in-memory/order-in-memory-repository";
import {CreateOrder} from "./create-order";
import {Order} from "../../entities/order/order";
import {GetOrders} from "./get-orders";
import {ShowOrder} from "./show-order";

describe('Show Order', async () => {

    const orderRepository = new OrderInMemoryRepository()
    const createOrder = new CreateOrder(orderRepository);
    const date = new Date()
    const order = await createOrder.execute({
        table_number: 10,
        start_at: date,
        status: true
    });

    const showOrder = new ShowOrder(orderRepository);

    it('should be able to show order', async () => {
        const orderShow = await showOrder.execute(order.id);
        expect(orderShow).toBeInstanceOf(Order)
        expect(orderShow.id).equal(order.id)
    });

    it('should be able to show order', () => {
        expect(showOrder.execute('test')).rejects.toBeInstanceOf(Error)
    });
});