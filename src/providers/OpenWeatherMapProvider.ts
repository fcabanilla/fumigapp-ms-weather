// src/providers/OpenWeatherMapProvider.ts
import { get } from "../utils/httpClient";
import { IWeatherProvider } from "./IWeatherProvider";
import {
  getWeatherApiKey,
  getWeatherBaseUrl,
  getWeatherUrl,
} from "../config/config";
import { CustomError } from "../errors/CustomError";

export class OpenWeatherMapProvider implements IWeatherProvider {
  private apiKey: string;
  private apiUrl: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = getWeatherApiKey();
    this.apiUrl = getWeatherUrl();
    this.baseUrl = getWeatherBaseUrl();
  }

  public async getCurrentWeather(location: string): Promise<any> {
    try {
      // Se usa la URL base y se concatena el endpoint para clima actual.
      const url = new URL(`${this.baseUrl}/data/2.5/weather`);
      url.searchParams.append("q", location);
      url.searchParams.append("appid", this.apiKey);
      // Puedes agregar más parámetros (p.ej. units, lang) si los necesitas
      const response = await get(url.toString());
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          `Fallo al obtener el clima actual: ${error.message}`,
          500
        );
      }
      throw new CustomError(
        "Fallo al obtener el clima actual: Error desconocido",
        500
      );
    }
  }

  /**
   * Fetches historical weather data for a given location.
   * @param {number} lat - Latitude of the location.
   * @param {number} lon - Longitude of the location.
   * @param {number} timestamp - Unix timestamp for the requested date.
   * @param {string} [units] - Measurement units (standard, metric, imperial).
   * @param {string} [lang] - Language for the response.
   * @returns {Promise<any>} - A promise resolving with the weather data.
   * @throws {CustomError} - If the request to the API fails.
   */
  public async getHistoricalWeather(
    lat: number,
    lon: number,
    timestamp: number,
    units?: string,
    lang?: string
  ): Promise<any> {
    try {
      const url = new URL(`${this.apiUrl}/data/3.0/onecall/timemachine`);
      url.searchParams.append("lat", lat.toString());
      url.searchParams.append("lon", lon.toString());
      url.searchParams.append("dt", timestamp.toString());
      url.searchParams.append("appid", this.apiKey);
      if (units) url.searchParams.append("units", units);
      if (lang) url.searchParams.append("lang", lang);

      const response = await get(url.toString());
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          `Failed to fetch historical weather data: ${error.message}`,
          500
        );
      }
      throw new CustomError(
        "Failed to fetch historical weather data: Unknown error",
        500
      );
    }
  }
}
