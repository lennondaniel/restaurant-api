import {MenuRepository} from "../../repositories/menu-repository";
import {Category, Menu} from "../../entities/menu/menu";

export class AddDishToMenu {
    constructor(private menuRepository: MenuRepository) {}
    async execute(dish_id: string, category: Category): Promise<Menu> {
        const menu = new Menu(dish_id, category);
        await this.menuRepository.addDishToMenu(menu);
        return menu;
    }
}