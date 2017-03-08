/// <reference path="../typings/tsd.d.ts" />


import * as express from "express";
import Middlewares from "./common/config/middlewares/MiddlewaresBase";
import Constants from "./common/config/constants/Constants";


let app = express();
let port = Constants.PORT;

app.set("port", port);
app.use(Middlewares.configuration);

app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});

