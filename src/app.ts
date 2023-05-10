import {sequelize} from "./infra/data-source/postgres/sequelize/connection";
import {DishRepository} from "./domain/repositories/dish-repository";
import {DishPostgresDataSource} from "./infra/data-source/postgres/dish-postgres-data-source";
import {ExpressAdapter} from "./infra/web-server/express-adpater";
import {DishRoutes} from "./infra/web-server/routes/dish-routes";

// @ts-ignore

const dishRepository = new DishRepository(new DishPostgresDataSource());

const httpServer = new ExpressAdapter();

const dishRoutes = new DishRoutes(httpServer, dishRepository);

dishRoutes.init();

httpServer.listen(3000)
sequelize.sync();
