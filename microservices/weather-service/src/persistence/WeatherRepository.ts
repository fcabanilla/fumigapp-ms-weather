export class WeatherRepository {
  // Ejemplo de almacenamiento en memoria
  private cache: Map<string, any> = new Map();

  public save(location: string, data: any): void {
    this.cache.set(location, data);
  }

  public get(location: string): any | undefined {
    return this.cache.get(location);
  }
}
