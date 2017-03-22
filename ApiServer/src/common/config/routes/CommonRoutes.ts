import * as express from "express";
import HealthCheckRoutes from "./HealthCheckRoutes";
import WeatherRoutes from "./WeatherRoutes";
import GlobalParams from "../constants/GlobalParameters";

let app = express();
export default class CommonRoutes {
    get routes() {
        app.use("/healthCheck", new HealthCheckRoutes().routes);
        app.use("/temp", new WeatherRoutes().routes);
        return app;
    }
}