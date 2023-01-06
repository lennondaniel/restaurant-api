import {MenuRepository} from "../../repositories/menu-repository";

export class GetAllMenu {
    constructor(private menuRepository: MenuRepository) {}

    execute() {
        return this.menuRepository.getAllMenu()
    }
}