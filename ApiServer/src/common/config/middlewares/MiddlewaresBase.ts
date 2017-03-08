import * as express from "express";
import * as bodyParser from "body-parser";

import CommonRoutes from "./../routes/CommonRoutes";

import GlobalParams from "./../constants/GlobalParameters";

export default class MiddlewaresBase {

    static get configuration() {
        let app = express();
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(new CommonRoutes().routes);

        return app;
    }
}
Object.seal(MiddlewaresBase);