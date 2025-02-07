import { Request, Response } from "express";
import { WeatherService } from "../services/WeatherService";

export class WeatherController {
  private weatherService: WeatherService;

  constructor() {
    // Instanciar el servicio. Más adelante puedes inyectarlo.
    this.weatherService = new WeatherService();
  }

  // Endpoint para obtener el clima actual según ubicación
  public async getCurrentWeather(req: Request, res: Response): Promise<void> {
    try {
      const location = req.query.location as string;
      if (!location) {
        res.status(400).json({ error: "El parámetro location es obligatorio" });
        return;
      }
      const data = await this.weatherService.getCurrentWeather(location);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener datos del clima" });
    }
  }

  // Dummy Endpoint
  public async getDummyData(req: Request, res: Response): Promise<void> {
    res.json({ message: "Hello World" });
  }
}
