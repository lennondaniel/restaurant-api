import {Category, Menu} from "../entities/menu/menu";
import {Dish} from "../entities/dish/dish";

export interface MenuRepository {
    addDishToMenu(menu): Promise<void>;
    getAllMenu(): Promise<Menu[]>;
    removeDishToMenu(dish_id: string): Promise<Menu[]>;
}