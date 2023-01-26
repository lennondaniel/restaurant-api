import { Sequelize } from "sequelize";
import {Config} from "../../../../config/database"; // importar o sequelize
// @ts-ignore

const {DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD} = Config.postgres
export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);