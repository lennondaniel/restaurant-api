import {beforeEach, describe, expect, it, vitest} from "vitest";
import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderFilter, OrderResponse} from "../../entities/order/order";
import {ShowOrder} from "./show-order";

describe('Show Order Use case', () => {
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

    it('should return data', async () => {
        // @ts-ignore
        const orderResponse: OrderResponse = {
            id: '123456',
            table_number: 10,
            status: true,
            start_at: new Date("2022-12-17T19:24:00"),
            end_at: new Date("2022-12-17T22:24:00"),
        };

        vitest.spyOn(mockOrderRepository, "showOrder").mockImplementation(() => Promise.resolve(orderResponse));
        const showOrderUseCase = new ShowOrder(mockOrderRepository);
        const order = await showOrderUseCase.execute('123456');

        expect(mockOrderRepository.showOrder).toHaveBeenCalledWith('123456');

        expect(order).toStrictEqual(
            {
                id: '123456',
                table_number: 10,
                status: true,
                start_at: new Date("2022-12-17T19:24:00"),
                end_at: new Date("2022-12-17T22:24:00"),
            }
        )
    });
});
