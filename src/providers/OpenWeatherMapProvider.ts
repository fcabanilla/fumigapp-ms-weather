// src/providers/OpenWeatherMapProvider.ts
import { IWeatherProvider } from "./IWeatherProvider";
import { getConfigValue } from "../config/config";

export class OpenWeatherMapProvider implements IWeatherProvider {
  // Puedes usar fetch, axios o cualquier librería para hacer la petición HTTP
  public async fetchCurrentWeather(location: string): Promise<any> {
    // Aquí iría la lógica para construir la URL y hacer la solicitud.
    // Ejemplo simplificado:
    const apiKey = getConfigValue("OPENWEATHERMAP_KEY");
    const url = getConfigValue("OPENWEATHERMAP_URL", { location, apiKey });

    // Usando fetch (asegúrate de instalar node-fetch o usar axios)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al consultar OpenWeatherMap");
    }
    return await response.json();
  }
}
