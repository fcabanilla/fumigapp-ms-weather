"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WeatherController_1 = require("../controllers/WeatherController");
const router = (0, express_1.Router)();
const weatherController = new WeatherController_1.WeatherController();
router.get("/weather", (req, res, next) => weatherController.getCurrentWeather(req, res, next));
router.get("/weather-dummy", (req, res, next) => weatherController.getDummyData(req, res));
exports.default = router;
