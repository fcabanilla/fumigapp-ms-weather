// src/providers/OpenWeatherMapProvider.ts
import axios from "axios";
import { IWeatherProvider } from "./IWeatherProvider";
import { getConfigValue } from "../config/config";
import { ConfigKeys as ck } from "../config/configKeys";

export class OpenWeatherMapProvider implements IWeatherProvider {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = getConfigValue(ck.WEATHER_API_KEY);
    this.apiUrl = getConfigValue(ck.WEATHER_URL);
  }

  public async getCurrentWeather(location: string): Promise<any> {
    const url = `${this.apiUrl}?q=${location}&appid=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
}
