import * as express from "express";
import HealthCheckRoutes from "./HealthCheckRoutes";
import WeatherRoutes from "./WeatherRoutes";
import LedControllerRoutes from "./LedControllerRoutes";
import EnginesControllerRoutes from "./EnginesControllerRoutes";
import GlobalParams from "../constants/GlobalParameters";

let app = express();
export default class CommonRoutes {
    get routes() {
        app.use("/healthCheck", new HealthCheckRoutes().routes);
        app.use("/temp", new WeatherRoutes().routes);
        app.use("/led", new LedControllerRoutes().routes)
        app.use("/blinds", new EnginesControllerRoutes().routes)
        return app;
    }
}