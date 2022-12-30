import {DishRepository} from "../dish-repository";
import { Dish } from "../../entities/dish/dish";

export class DishInMemoryRepository implements DishRepository {
    public dishes: Dish[] = [];
    // @ts-ignore
    create(dish: Dish): Promise<void> {
        this.dishes.push(dish);
    }
    findOverlapping(name: string, id: string = null): Promise<Dish | null> {
        return new Promise((resolve) => {
            const overlappingDish = this.dishes.find(dish => {
                if(id){
                    return dish.name === name && dish.id !== id
                }

                return dish.name === name
            });

            if(!overlappingDish) {
                 resolve(null);
            }

            resolve(overlappingDish);
        });
    }

    show(id: string): Promise<Dish> {
        return new Promise((resolve) => {
            const dish = this.dishes.find(dish => dish.id === id);
            resolve(dish);
        });
    }

    update(id: string, dish: Dish): Promise<Dish> {
        return new Promise((resolve) => {
            const dishIndex = this.dishes.findIndex(dish => dish.id === id);
            this.dishes[dishIndex].name = dish.name;
            this.dishes[dishIndex].image = dish.image;
            this.dishes[dishIndex].description = dish.description;
            this.dishes[dishIndex].price = dish.price;
            resolve(this.dishes[dishIndex]);
        });
    }

    updateStatus(id: string): Promise<Dish> {
        return new Promise((resolve) => {
            const dishIndex = this.dishes.findIndex(dish => dish.id === id);
            this.dishes[dishIndex].status = !this.dishes[dishIndex].status;
            resolve(this.dishes[dishIndex]);
        });
    }

    delete(id: string): Promise<Dish> {
        return new Promise((resolve) => {
            const dishIndex = this.dishes.findIndex(dish => dish.id === id);
            this.dishes[dishIndex].deleted_at = new Date();
            resolve( this.dishes[dishIndex]);
        });
    }
}