"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherRepository = void 0;
class WeatherRepository {
    constructor() {
        // Ejemplo de almacenamiento en memoria
        this.cache = new Map();
    }
    save(location, data) {
        this.cache.set(location, data);
    }
    get(location) {
        return this.cache.get(location);
    }
}
exports.WeatherRepository = WeatherRepository;
