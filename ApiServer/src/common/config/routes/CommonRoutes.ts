import * as express from "express";
import HealthCheckRoutes from "./HealthCheckRoutes";
import GlobalParams from "../constants/GlobalParameters";

let app = express();
export default class CommonRoutes {
    get routes() {
        app.use("/healthCheck", new HealthCheckRoutes().routes);
        return app;
    }
}