"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const WeatherService_1 = require("../services/WeatherService");
const OpenWeatherMapProvider_1 = require("../providers/OpenWeatherMapProvider");
class WeatherController {
    constructor() {
        const weatherProvider = new OpenWeatherMapProvider_1.OpenWeatherMapProvider();
        this.weatherService = new WeatherService_1.WeatherService(weatherProvider);
    }
    getCurrentWeather(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const location = req.query.location;
            if (!location) {
                res.status(400).json({ error: 'El parámetro "location" es obligatorio' });
                return;
            }
            try {
                const data = yield this.weatherService.getCurrentWeather(location);
                res.json(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getDummyData(req, res) {
        res.json({ message: "Hello World" });
    }
}
exports.WeatherController = WeatherController;
