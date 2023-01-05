import {Category, Menu} from "../entities/menu/menu";

export interface MenuRepository {
    addDishToMenu(menu): Promise<void>;
}