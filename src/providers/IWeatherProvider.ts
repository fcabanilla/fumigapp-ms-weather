// src/providers/IWeatherProvider.ts

export interface IWeatherProvider {
  getCurrentWeather(location: string): Promise<any>;
}
