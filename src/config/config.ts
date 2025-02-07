// src/config/config.ts
import dotenv from "dotenv";
import path from "path";

// Carga las variables de entorno del archivo .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Definición del objeto de configuración
type ConfigKeys = "PORT" | "OPENWEATHERMAP_KEY" | "OPENWEATHERMAP_URL";

const config: Record<ConfigKeys, string | number> = {
  PORT: process.env.PORT || 3000,
  OPENWEATHERMAP_KEY: process.env.OPENWEATHERMAP_KEY || "default_api_key",
  OPENWEATHERMAP_URL:
    "https://api.openweathermap.org/data/2.5/weather?q={location}&appid={apiKey}",
};

// Función para obtener una variable de forma segura
export function getConfigValue(
  key: ConfigKeys,
  params?: { [key: string]: string }
): string {
  let value = config[key];
  if (params) {
    Object.entries(params).forEach(([param, replacement]) => {
      if (typeof value === "string") {
        value = value.replace(`{${param}}`, replacement);
      }
    });
  }
  return value.toString();
}
