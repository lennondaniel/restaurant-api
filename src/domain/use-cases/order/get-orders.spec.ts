

import {beforeEach, describe, expect, it, vitest} from "vitest";
import {IOrderRepository} from "../../interfaces/repositories/order-repository";
import {OrderFilter, OrderResponse} from "../../entities/order/order";
import {GetOrders} from "./get-orders";

describe('Get Orders Use case', () => {
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
        const order: OrderResponse = {
            id: '123456',
            table_number: 10,
            status: true,
            start_at: new Date("2022-12-17T19:24:00"),
            end_at: new Date("2022-12-17T22:24:00"),
        }

        vitest.spyOn(mockOrderRepository, "getOrders").mockImplementation(() => Promise.resolve([order]))
        const getOrdersUseCase = new GetOrders(mockOrderRepository)
        const orders = await getOrdersUseCase.execute({

        })

        expect(orders).toStrictEqual([
            {
                id: '123456',
                table_number: 10,
                status: true,
                start_at: new Date("2022-12-17T19:24:00"),
                end_at: new Date("2022-12-17T22:24:00"),
            }
        ])
    });
});
