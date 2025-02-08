// src/config/config.ts

import dotenv from "dotenv";
import path from "path";
import { ConfigKeys } from "./configKeys";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

/**
 * Retrieves the value of an environment variable.
 * @param {ConfigKeys} key - The configuration key.
 * @returns {string} - The value of the environment variable.
 * @throws Will throw an error if the environment variable is not defined.
 */
export function getConfigValue(key: ConfigKeys): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}
