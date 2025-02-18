"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenWeatherMapProvider = void 0;
// src/providers/OpenWeatherMapProvider.ts
const httpClient_1 = require("../utils/httpClient");
const config_1 = require("../config/config");
const CustomError_1 = require("../errors/CustomError");
class OpenWeatherMapProvider {
    constructor() {
        this.apiKey = (0, config_1.getWeatherApiKey)();
        this.apiUrl = (0, config_1.getWeatherUrl)();
        this.baseUrl = (0, config_1.getWeatherBaseUrl)();
    }
    getCurrentWeather(location) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Se usa la URL base y se concatena el endpoint para clima actual.
                const url = new URL(`${this.baseUrl}/data/2.5/weather`);
                url.searchParams.append("q", location);
                url.searchParams.append("appid", this.apiKey);
                // Puedes agregar más parámetros (p.ej. units, lang) si los necesitas
                const response = yield (0, httpClient_1.get)(url.toString());
                return response;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(`Fallo al obtener el clima actual: ${error.message}`, 500);
                }
                throw new CustomError_1.CustomError("Fallo al obtener el clima actual: Error desconocido", 500);
            }
        });
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
    getHistoricalWeather(lat, lon, timestamp, units, lang) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = new URL(`${this.apiUrl}/data/3.0/onecall/timemachine`);
                url.searchParams.append("lat", lat.toString());
                url.searchParams.append("lon", lon.toString());
                url.searchParams.append("dt", timestamp.toString());
                url.searchParams.append("appid", this.apiKey);
                if (units)
                    url.searchParams.append("units", units);
                if (lang)
                    url.searchParams.append("lang", lang);
                const response = yield (0, httpClient_1.get)(url.toString());
                return response;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new CustomError_1.CustomError(`Failed to fetch historical weather data: ${error.message}`, 500);
                }
                throw new CustomError_1.CustomError("Failed to fetch historical weather data: Unknown error", 500);
            }
        });
    }
}
exports.OpenWeatherMapProvider = OpenWeatherMapProvider;
