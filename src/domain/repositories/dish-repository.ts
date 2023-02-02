import {IDishRepository} from "../interfaces/repositories/dish-repository";
import {DishRequest, DishResponse} from "../entities/dish/dish";
import {DishDataSource} from "../../infra/data-source/interfaces/dish-data-source";

export class DishRepository implements IDishRepository {
    constructor(private dishDataSource: DishDataSource) {}
    async createDish(dish: DishRequest) {
        await this.dishDataSource.create(dish);
    }

    async findDish(name: string): Promise<DishResponse | null> {
        return await this.dishDataSource.find(name);
    }

    async showDish(id: string): Promise<DishResponse | null> {
        return await this.dishDataSource.show(id);
    }

    async updateDish(id: string, dish: DishRequest) {
        await this.dishDataSource.update(id, dish);
    }

    async deleteDish(id: string) {
        await this.dishDataSource.delete(id);
    }

}
