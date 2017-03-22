import * as express from "express";
import * as request from "request";

import TemperatureDownloader from "./../../WeatherDownloader/TemperatureDownloader";

let router = express.Router();
export default class WeatherRoutes {
    get routes() {
        router.get("/", weatherTest);
        return router;
    }
}

let weatherTest = (req: express.Request, res: express.Response): void => {
    var downloader = new TemperatureDownloader();
    downloader.GetCurrentByCityId(756135)
        .then(temp => res.status(200).json(temp))
        .catch(error => res.status(500).json(error));
};

Object.seal(WeatherRoutes);