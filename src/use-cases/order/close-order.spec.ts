import {afterAll, describe, expect, it} from "vitest";
import {OrderInMemoryRepository} from "../../repositories/in-memory/order-in-memory-repository";
import {CreateOrder} from "./create-order";
import {Order} from "../../entities/order/order";
import {GetOrders} from "./get-orders";
import {ShowOrder} from "./show-order";
import {CloseOrder} from "./close-order";

describe('Close Order', async () => {
    it('should be able to show order', async () => {
        const orderRepository = new OrderInMemoryRepository()
        const createOrder = new CreateOrder(orderRepository);
        const date = new Date()
        const order = await createOrder.execute({
            table_number: 10,
            start_at: date,
            status: true
        });

        const closeOrder = new CloseOrder(orderRepository);
        const closedOrder = await closeOrder.execute(order.id);
        expect(closedOrder).toBeInstanceOf(Order)
        expect(closedOrder.status).equal(false)
    });
});