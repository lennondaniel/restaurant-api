import {MenuRepository} from "../../repositories/menu-repository";
import {Menu} from "../../entities/menu/menu";

export class GetAllMenu {
    constructor(private menuRepository: MenuRepository) {}

    execute(): Promise<Menu[]> {
        return this.menuRepository.getAllMenu()
    }
}