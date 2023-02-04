import {DishDataSource} from "../interfaces/dish-data-source";
import {DishRequest, DishResponse} from "../../../domain/entities/dish/dish";
import DishModel from "./sequelize/models/dish-model";

export class DishPostgresDataSource implements DishDataSource {
    async create({name, image, price, description, category}: DishRequest) {
        await DishModel.create({
            name: name,
            image: image,
            price: price,
            description: description,
            category: category
        });
    }
    async find(name: string): Promise<DishResponse | null> {
        return await DishModel.findOne({where: {name: name}})
    }

    async show(id: string): Promise<DishResponse | null> {
        return await DishModel.findByPk(id);
    }

    async update(id: string, {name, image, price, description, category}: DishRequest) {
        await DishModel.update(
            {
                name: name,
                image: image,
                price: price,
                description: description,
                category: category
            }, {
                where: { id: id }
            }
        )
    }

    async delete(id: string) {
        await DishModel.update(
            {
                deleted_at: new Date()
            }, {
                where: {
                    id: id
                }
            }
        )
    }
}
