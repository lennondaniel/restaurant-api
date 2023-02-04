import {DataTypes, Model} from "sequelize";
import {sequelize} from "../connection";

class OrderDishesModel extends Model {
    declare order_id: string;
    declare dish_id: string;
}

OrderDishesModel.init(
    {
        order_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        dish_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'order_dishes',
        modelName: 'OrderDishesModel',
        timestamps: false
    })


export default OrderDishesModel;
