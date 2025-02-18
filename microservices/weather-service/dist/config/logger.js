"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = getLogger;
// src/config/logger.ts
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    level: "info",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
    transports: [new winston_1.transports.Console()],
});
/**
 * Retorna la instancia del logger.
 * @returns {Logger} Instancia del logger de winston.
 */
function getLogger() {
    return logger;
}
