import { Response } from "express";

// Definir tipos para los datos y errores
type SuccessData = Record<string, any>;

interface ErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, any>;
}

// Enum para códigos de estado HTTP comunes
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

/**
 * Envía una respuesta de éxito
 * @param res - Objeto Response de Express
 * @param data - Datos a enviar en la respuesta
 * @param status - Código de estado HTTP (opcional, por defecto 200)
 */
export function sendSuccess(res: Response, data: SuccessData, status: HttpStatus = HttpStatus.OK): void {
  res.status(status).json({
    success: true,
    data,
    error: null,
  });
}

/**
 * Envía una respuesta de error
 * @param res - Objeto Response de Express
 * @param error - Objeto de error o mensaje de error
 * @param status - Código de estado HTTP (opcional, por defecto 500)
 */
export function sendError(
  res: Response,
  error: ErrorResponse | string,
  status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
): void {
  const errorResponse: ErrorResponse = typeof error === "string" ? { message: error } : error;

  res.status(status).json({
    success: false,
    data: null,
    error: errorResponse,
  });
}

// Ejemplo de uso:
// sendSuccess(res, { user: { id: 1, name: "John" } });
// sendSuccess(res, { message: "Resource created" }, HttpStatus.CREATED);
// sendError(res, "Not found", HttpStatus.NOT_FOUND);
// sendError(res, { message: "Validation failed", code: "VAL_ERR", details: { field: "email" } }, HttpStatus.BAD_REQUEST);
