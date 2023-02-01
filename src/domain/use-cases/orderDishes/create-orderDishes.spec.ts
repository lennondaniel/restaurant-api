import {beforeEach, describe, expect, it, vitest} from "vitest";
import {IOrderDishesRepository} from "../../interfaces/repositories/orderDishes-repository";
import {OrderDishRequest} from "../../entities/orderDishes/orderDishes";
import {CreateOrderDishes} from "./create-orderDishes";

describe('Create Order dish Use case', () => {
    class MockOrderDishRepository implements IOrderDishesRepository {
        createOrderDish(orderDish: OrderDishRequest) {
            throw new Error('Method not implemented');
        }
    }

    let mockOrderDishRepository: IOrderDishesRepository

    beforeEach(() => {
        vitest.clearAllMocks();
        mockOrderDishRepository = new MockOrderDishRepository();
    })

    it('should return true', async () => {
        vitest.spyOn(mockOrderDishRepository, "createOrderDish").mockImplementation(() => Promise.resolve(true))
        const createOrderDishUseCase = new CreateOrderDishes(mockOrderDishRepository)
        await createOrderDishUseCase.execute({
            order_id: '12345',
            dish_id: '12345'
        })

        expect(mockOrderDishRepository.createOrderDish).toBeCalledTimes(1);
    });
});
