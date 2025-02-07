import { IWeatherService } from "./IWeatherService";
import { IWeatherProvider } from "../providers/IWeatherProvider";
import { OpenWeatherMapProvider } from "../providers/OpenWeatherMapProvider";

export class WeatherService implements IWeatherService {
  // Aquí podrías inyectar diferentes proveedores vía configuración o DI.
  private weatherProvider: IWeatherProvider;

  constructor() {
    // Por ahora instanciamos un proveedor concreto.
    this.weatherProvider = new OpenWeatherMapProvider();
  }

  public async getCurrentWeather(location: string): Promise<any> {
    // Puedes incluir lógica adicional (caching, validación, formateo de datos, etc.)
    return await this.weatherProvider.fetchCurrentWeather(location);
  }
}
