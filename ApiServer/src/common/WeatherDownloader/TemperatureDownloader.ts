/// <reference path="../../../typings/index.d.ts" />

import * as request from "request";

export default class TemperatureDownloader {
    private readonly openWeatherUrl: string = "http://api.openweathermap.org/data/2.5/weather";
    private readonly appKey: string = "34cc8c047c2c315e1cbcd7fdbc0f649f";
    private readonly defaultUnits: string = "metric";

    GetCurrentByCityId(cityId: number, units: string = this.defaultUnits): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            request.get({
                url: this.openWeatherUrl,
                headers: { 'Content-Type': 'application/json' },
                qs: { id: cityId, appid: this.appKey, units: units }
            }, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    let bodyParsed = JSON.parse(body);
                    if (bodyParsed != null && bodyParsed.main != null) {
                        resolve(bodyParsed.main.temp);
                    } else {
                        reject("Wrong response from the API!");
                    }
                }
            });
        });
    };
}
