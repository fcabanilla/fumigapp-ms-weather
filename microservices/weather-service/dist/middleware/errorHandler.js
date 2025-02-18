"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const CustomError_1 = require("../errors/CustomError");
/**
 * Middleware de manejo de errores para Express.
 * @param {Error} err - El objeto de error.
 * @param {Request} req - El objeto de solicitud de Express.
 * @param {Response} res - El objeto de respuesta de Express.
 * @param {NextFunction} next - La siguiente función de middleware.
 */
function errorHandler(err, req, res, next) {
    if (err instanceof CustomError_1.CustomError) {
        res.status(err.statusCode).json({ error: err.message });
    }
    else {
        console.error(err.stack); // Log del error para propósitos de depuración
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
