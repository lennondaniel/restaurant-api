import {expect, test} from "vitest";
import {Order} from "./order";

test('create a new order', () => {
    const order = new Order({
        table_number: 10,
        start_at: new Date(),
    });

    expect(order).toBeInstanceOf(Order);

})