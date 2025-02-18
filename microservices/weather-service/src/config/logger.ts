// src/config/logger.ts
import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [new transports.Console()],
});

/**
 * Retorna la instancia del logger.
 * @returns {Logger} Instancia del logger de winston.
 */
export function getLogger() {
  return logger;
}
