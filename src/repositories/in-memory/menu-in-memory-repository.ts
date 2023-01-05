import {MenuRepository} from "../menu-repository";
import {Category, Menu} from "../../entities/menu/menu";

export class MenuInMemoryRepository implements MenuRepository {
    public menu: Menu[] = [];
    // @ts-ignore
    addDishToMenu(menu: Menu): Promise<void> {
        this.menu.push(menu)
    }
}