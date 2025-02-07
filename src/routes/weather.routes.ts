import { Router } from "express";
import { WeatherController } from "../controllers/WeatherController";

const router = Router();
const weatherController = new WeatherController();

router.get("/weather", (req, res) =>
  weatherController.getCurrentWeather(req, res)
);
router.get("/weather-dummy", (req, res) =>
  weatherController.getDummyData(req, res)
);

export default router;
