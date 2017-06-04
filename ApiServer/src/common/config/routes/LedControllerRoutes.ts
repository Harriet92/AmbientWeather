import * as express from "express";
import * as request from "request";

import TemperatureDownloader from "./../../WeatherDownloader/TemperatureDownloader";
import LedControllerApi from "./../../Apps/LedControllerApi"

let router = express.Router();
export default class LedControllerRoutes {
    controller: LedControllerApi;
    get routes() {
        this.controller = new LedControllerApi();
        router.get("/off", this.turnOffLed);
        router.get("/on", this.turnOnLed);
        return router;
    }


    turnOnLed = (req: express.Request, res: express.Response): void => {
        this.controller.Run();
        res.status(200).json("Led probably turned on! ;D")
    };

    turnOffLed = (req: express.Request, res: express.Response): void => {
        this.controller.Stop();
        res.status(200).json("Led probably turned off! ;D")
    };
}


Object.seal(LedControllerRoutes);