import {DishRepository} from "../../repositories/dishes-repository";
import { Dish } from "../../entities/dishes/dishes";
import DishModel from "../../infra/postgres/sequelize/models/dishes-model";
import {IRequestDish} from "../../interfaces/dishes-interfaces";

export class DishPostgresRepository implements DishRepository {
    async create({name, image, price, description, category}: IRequestDish) {
        await DishModel.create({
            name: name,
            image: image,
            price: price,
            description: description,
            category: category
        });
    }
    async findOverlapping(name: string, id: string = null): Promise<Dish | null> {
        return await DishModel.findOne({where: {name: name}})
    }

    async show(id: string): Promise<Dish> {
        return await DishModel.findByPk(id);
    }

    async update(id: string, {name, image, price, description, category}: IRequestDish) {
        await DishModel.update(
            {
                name: name,
                image: image,
                price: price,
                description: description,
                category: category
            }, {
                where: {
                    id: id
                }
            }
        )
    }

    async updateStatus(id: string, status: boolean){
        await DishModel.update(
            {
                status: status
            }, {
                where: {
                    id: id
                }
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