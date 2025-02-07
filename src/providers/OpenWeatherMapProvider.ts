import { IWeatherProvider } from "./IWeatherProvider";
import { config } from "../config/config";

export class OpenWeatherMapProvider implements IWeatherProvider {
  // Puedes usar fetch, axios o cualquier librería para hacer la petición HTTP
  public async fetchCurrentWeather(location: string): Promise<any> {
    // Aquí iría la lógica para construir la URL y hacer la solicitud.
    // Ejemplo simplificado:
    const apiKey = config.openWeatherMapKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    // Usando fetch (asegúrate de instalar node-fetch o usar axios)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al consultar OpenWeatherMap");
    }
    return await response.json();
  }
}
