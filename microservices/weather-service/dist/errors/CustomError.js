"use strict";
// src/errors/CustomError.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.CustomError = void 0;
/**
 * Clase base para errores personalizados.
 */
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
/**
 * Error para solicitudes inválidas del cliente.
 */
class BadRequestError extends CustomError {
    constructor(message = "Solicitud inválida") {
        super(message, 400);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
exports.BadRequestError = BadRequestError;
/**
 * Error para recursos no encontrados.
 */
class NotFoundError extends CustomError {
    constructor(message = "Recurso no encontrado") {
        super(message, 404);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
exports.NotFoundError = NotFoundError;
