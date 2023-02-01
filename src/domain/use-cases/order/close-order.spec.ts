
import {beforeEach, describe, expect, it, vitest} from "vitest";
import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderFilter, OrderResponse} from "../../entities/order/order";
import {CloseOrder} from "./close-order";

describe('Close Order Use case', () => {
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
        vitest.spyOn(mockOrderRepository, "closeOrder").mockImplementation(() => Promise.resolve(true))
        const closeOrderUseCase = new CloseOrder(mockOrderRepository)
        await closeOrderUseCase.execute('123456')

        expect(mockOrderRepository.closeOrder).toHaveBeenCalledWith('123456');
    });
});