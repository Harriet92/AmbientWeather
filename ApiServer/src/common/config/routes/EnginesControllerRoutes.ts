import * as express from "express";
import * as request from "request";

import EnginesControllerApi from "./../../Apps/EnginesControllerApi"

let router = express.Router();
export default class EnginesControllerRoutes {
    controller: EnginesControllerApi;
    get routes() {
        this.controller = new EnginesControllerApi();
        router.get("/open", this.openBlinds);
        router.get("/close", this.closeBlinds);
        return router;
    }


    openBlinds = (req: express.Request, res: express.Response): void => {
        this.controller.Open();
        res.status(200).json("Have a wonderful day!")
    };

    closeBlinds = (req: express.Request, res: express.Response): void => {
        this.controller.Close();
        res.status(200).json("Goodnight! :3")
    };
}


Object.seal(EnginesControllerRoutes);