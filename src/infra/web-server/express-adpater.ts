import express, { Request, Response } from "express";
import HttpServer from "./http-server";

export class ExpressAdapter implements HttpServer {
    app: any;

    constructor () {
        this.app = express();
        this.app.use(express.json());
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body);
            res.status(output.statusCode).json(output.response);
        });
    }

    listen(port: number): void {
        this.app.listen(port);
    }
}
