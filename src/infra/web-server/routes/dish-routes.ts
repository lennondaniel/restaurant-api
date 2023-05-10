import {DishRepository} from "../../../domain/repositories/dish-repository";
import HttpServer from "../http-server";
import {CreateDish} from "../../../domain/use-cases/dish/create-dish";


export class DishRoutes {
    constructor(private httpServer: HttpServer, private dishRepository: DishRepository) {}

    async init() {
        this.httpServer.on('post', '/dishes', async (params: any, body: any) => {
            try {
                const createDish = new CreateDish(this.dishRepository);
                await createDish.execute(body)
                return {
                    statusCode: 201,
                    response: 'success'
                }
            }catch (e) {
                console.log(e)
                return {
                    statusCode: 500,
                    response: e
                }
            }
        });

    }
}
