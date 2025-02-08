import { Router } from "express";
import { WeatherController } from "../controllers/WeatherController";

const router = Router();
const weatherController = new WeatherController();

router.get("/weather", (req, res, next) =>
  weatherController.getCurrentWeather(req, res, next)
);
router.get("/weather-dummy", (req, res, next) =>
  weatherController.getDummyData(req, res)
);

export default router;
