import {MenuRepository} from "../../repositories/menu-repository";
import {Menu} from "../../entities/menu/menu";

export class RemoveDishToMenu {
    constructor(private menuRepository: MenuRepository) {}
    execute(dish_id: string): Promise<Menu[]>{
        return this.menuRepository.removeDishToMenu(dish_id);
    }
}