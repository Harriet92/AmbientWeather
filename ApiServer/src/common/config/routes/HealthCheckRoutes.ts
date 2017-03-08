import * as express from "express";
import GlobalParameters from "../constants/GlobalParameters";

let router = express.Router();
export default class HealthCheckRoutes {
    get routes() {
        router.get("/", healthCheck);
        return router;
    }
}

let healthCheck = (req: express.Request, res: express.Response): void => {
    res.status(200).json(`Server running`);
};

Object.seal(HealthCheckRoutes);