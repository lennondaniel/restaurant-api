import {DishRepository} from "../dish-repository";
import { Dish } from "../../entities/dish/dish";

export class DishInMemoryRepository implements DishRepository {
    public dishes: Dish[] = [];
    // @ts-ignore
    create(dish: Dish): Promise<void> {
        this.dishes.push(dish);
    }
    findOverlapping(name: string): Promise<Dish | null> {
        return new Promise((resolve) => {
            const overlappingDish = this.dishes.find(dish => dish.name === name);

            if(!overlappingDish) {
                 resolve(null);
            }

            resolve(overlappingDish);
        })
    }
}