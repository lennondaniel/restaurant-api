import {MenuRepository} from "../menu-repository";
import {Category, Menu} from "../../entities/menu/menu";

export class MenuInMemoryRepository implements MenuRepository {
    public menu: Menu[] = [];
    // @ts-ignore
    addDishToMenu(menu: Menu): Promise<void> {
        this.menu.push(menu)
    }
    getAllMenu(): Promise<Menu[]> {
        return new Promise(resolve =>  {
            resolve(this.menu)
        })

    }
    removeDishToMenu(dish_id: string): Promise<Menu[]> {
        return new Promise((resolve) => {
            const menu = this.menu;
            const dishIndex = menu.findIndex(menu => menu.dish_id === dish_id);
            this.menu[dishIndex].deleted_at = new Date();
            resolve(this.menu);
        });
    }
}