

import {beforeEach, describe, expect, it, vitest} from "vitest";
import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderFilter, OrderResponse} from "../../entities/order/order";
import {CreateOrder} from "./create-order";

describe('Create Order Use case', () => {
    class MockOrderRepository implements IOrderRepository {
        closeOrder(id: string): void {
            throw new Error('Method not implemented');
        }

        createOrder(order: OrderResponse): void {
            throw new Error('Method not implemented');
        }

        getOrders(orderFilter: OrderFilter): Promise<OrderResponse[]> {
            throw new Error('Method not implemented');
        }

        showOrder(id: string): Promise<OrderResponse> {
            throw new Error('Method not implemented');
        }
    }

    let mockOrderRepository: IOrderRepository

    beforeEach(() => {
        vitest.clearAllMocks();
        mockOrderRepository = new MockOrderRepository();
    })

    it('should return true', async () => {
        vitest.spyOn(mockOrderRepository, "createOrder").mockImplementation(() => Promise.resolve(true))
        const createOrderUseCase = new CreateOrder(mockOrderRepository)
        await createOrderUseCase.execute({
            table_number: 10,
            start_at: new Date(),
            status: true
        })

        expect(mockOrderRepository.createOrder).toBeCalledTimes(1);
    });
});