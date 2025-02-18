export interface IWeatherService {
  getCurrentWeather(location: string): Promise<any>;
}
