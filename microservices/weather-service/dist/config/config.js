"use strict";
// src/config/config.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPort = getPort;
exports.getWeatherUrl = getWeatherUrl;
exports.getWeatherBaseUrl = getWeatherBaseUrl;
exports.getWeatherApiKey = getWeatherApiKey;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const configKeys_1 = require("./configKeys");
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "./.env") });
/**
 * Retrieves the value of an environment variable.
 * @param {ConfigKeys} key - The configuration key.
 * @returns {string} - The value of the environment variable.
 * @throws {Error} - If the environment variable is not defined.
 */
function getConfigValue(key) {
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
function getPort() {
    return getConfigValue(configKeys_1.ConfigKeys.PORT);
}
/**
 * Retrieves the weather API base URL from environment variables.
 * @returns {string} - The weather API URL.
 */
function getWeatherUrl() {
    return getConfigValue(configKeys_1.ConfigKeys.OPENWEATHERMAP_URL);
}
/*
 * Retrieves the weather API base URL from environment variables.
 * @returns {string} - The weather API URL.
 */
function getWeatherBaseUrl() {
    return getConfigValue(configKeys_1.ConfigKeys.OPENWEATHER_BASE_URL);
}
/**
 * Retrieves the weather API key from environment variables.
 * @returns {string} - The weather API key.
 */
function getWeatherApiKey() {
    return getConfigValue(configKeys_1.ConfigKeys.OPENWEATHERMAP_KEY);
}
