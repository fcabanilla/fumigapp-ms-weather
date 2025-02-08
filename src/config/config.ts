// src/config/config.ts

import dotenv from "dotenv";
import path from "path";
import { ConfigKeys } from "./configKeys";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

/**
 * Retrieves the value of an environment variable.
 * @param {ConfigKeys} key - The configuration key.
 * @returns {string} - The value of the environment variable.
 * @throws {Error} - If the environment variable is not defined.
 */
function getConfigValue(key: ConfigKeys): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}

/**
 * Retrieves the application port from environment variables.
 * @returns {string} - The application port.
 */
export function getPort(): string {
  return getConfigValue(ConfigKeys.PORT);
}

/**
 * Retrieves the weather API base URL from environment variables.
 * @returns {string} - The weather API URL.
 */
export function getWeatherUrl(): string {
  return getConfigValue(ConfigKeys.OPENWEATHERMAP_URL);
}

/*
 * Retrieves the weather API base URL from environment variables.
 * @returns {string} - The weather API URL.
 */
export function getWeatherBaseUrl(): string {
  return getConfigValue(ConfigKeys.OPENWEATHER_BASE_URL);
}

/**
 * Retrieves the weather API key from environment variables.
 * @returns {string} - The weather API key.
 */
export function getWeatherApiKey(): string {
  return getConfigValue(ConfigKeys.OPENWEATHERMAP_KEY);
}
