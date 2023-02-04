import {DataTypes, Model} from "sequelize";
import {sequelize} from "../connection";

class OrderModel extends Model {
    declare id: string;
    declare table_number: number;
    declare status: boolean;
    declare start_at: Date;
    declare end_at: Date;
}

OrderModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        table_number: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        start_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        end_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        sequelize,
        modelName: 'OrderModel',
        tableName: 'orders',
        timestamps: false
    });

export default OrderModel;
