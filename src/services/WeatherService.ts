// src/services/WeatherService.ts
import { IWeatherProvider } from "../providers/IWeatherProvider";

export class WeatherService {
  private weatherProvider: IWeatherProvider;

  constructor(weatherProvider: IWeatherProvider) {
    this.weatherProvider = weatherProvider;
  }

  public async getCurrentWeather(location: string): Promise<any> {
    return this.weatherProvider.getCurrentWeather(location);
  }
}
