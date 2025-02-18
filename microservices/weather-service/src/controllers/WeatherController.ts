// src/controllers/WeatherController.ts
import { Request, Response, NextFunction } from "express";
import { WeatherService } from "../services/WeatherService";
import { OpenWeatherMapProvider } from "../providers/OpenWeatherMapProvider";

export class WeatherController {
  private weatherService: WeatherService;

  constructor() {
    const weatherProvider = new OpenWeatherMapProvider();
    this.weatherService = new WeatherService(weatherProvider);
  }

  public async getCurrentWeather(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const location = req.query.location as string;
    if (!location) {
      res.status(400).json({ error: 'El parámetro "location" es obligatorio' });
      return;
    }

    try {
      const data = await this.weatherService.getCurrentWeather(location);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  public getDummyData(req: Request, res: Response): void {
    res.json({ message: "Hello World" });
  }
}
