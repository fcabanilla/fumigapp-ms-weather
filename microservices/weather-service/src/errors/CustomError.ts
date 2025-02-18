// src/errors/CustomError.ts

/**
 * Clase base para errores personalizados.
 */
export class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

/**
 * Error para solicitudes inválidas del cliente.
 */
export class BadRequestError extends CustomError {
  constructor(message: string = "Solicitud inválida") {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * Error para recursos no encontrados.
 */
export class NotFoundError extends CustomError {
  constructor(message: string = "Recurso no encontrado") {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
