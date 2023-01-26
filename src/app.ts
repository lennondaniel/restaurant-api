import {sequelize} from "./infra/data-source/postgres/sequelize/connection";

// @ts-ignore
sequelize.sync(() => console.log('database is connected'));