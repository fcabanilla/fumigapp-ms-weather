export interface IWeatherProvider {
  fetchCurrentWeather(location: string): Promise<any>;
}
