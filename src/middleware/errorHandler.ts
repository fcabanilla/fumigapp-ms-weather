// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/CustomError";

/**
 * Middleware de manejo de errores para Express.
 * @param {Error} err - El objeto de error.
 * @param {Request} req - El objeto de solicitud de Express.
 * @param {Response} res - El objeto de respuesta de Express.
 * @param {NextFunction} next - La siguiente función de middleware.
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error(err.stack); // Log del error para propósitos de depuración
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
