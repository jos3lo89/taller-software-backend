import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../libs/jwt.libs";

export const authValidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) throw new Error("No existe el token");

    const decoded = await verifyToken(token);

    const { iat, exp, ...payload } = decoded;

    req.user = payload;

    next();
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error de autenticación desconocido" });
  }
};
