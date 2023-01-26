import {DataTypes, Model, Sequelize} from "sequelize";
import {CategoryDish} from "../../../../../domain/entities/dish/dish";
import {sequelize} from "../connection";


class DishModel extends Model {
    declare id: string;
    declare name: string;
    declare image: string;
    declare description: string;
    declare price: number;
    declare status: boolean;
    declare category: CategoryDish;
    declare deleted_at: Date;
}

DishModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        category: {
            type: DataTypes.ENUM(
                CategoryDish.APPETIZER,
                CategoryDish.DESSERT,
                CategoryDish.DRINKS,
                CategoryDish.MAIN
            ),
            allowNull: false,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'DishModel',
        tableName: 'dishes'
    }
);

export default DishModel;
