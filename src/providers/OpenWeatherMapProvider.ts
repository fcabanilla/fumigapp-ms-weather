// src/providers/OpenWeatherMapProvider.ts
import axios from "axios";
import { IWeatherProvider } from "./IWeatherProvider";
import { getWeatherApiKey, getWeatherUrl } from "../config/config";
import { CustomError } from "../errors/CustomError";

export class OpenWeatherMapProvider implements IWeatherProvider {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = getWeatherApiKey();
    this.apiUrl = getWeatherUrl();
  }

  /**
   * Fetches the current weather for a given location.
   * @param {string} location - The name of the location (e.g., city name).
   * @returns {Promise<any>} - A promise resolving with the weather data.
   * @throws {CustomError} - If the request to the API fails.
   */
  public async getCurrentWeather(location: string): Promise<any> {
    try {
      const url = new URL(this.apiUrl);
      url.searchParams.append("q", location);
      url.searchParams.append("appid", this.apiKey);

      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new CustomError(
          `Failed to fetch weather data: ${
            error.response?.statusText || error.message
          }`,
          error.response?.status || 500
        );
      }
      throw new CustomError("Failed to fetch weather data: Unknown error", 500);
    }
  }
}
