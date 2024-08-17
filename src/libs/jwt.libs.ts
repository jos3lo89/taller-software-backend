import jwt from "jsonwebtoken";
import { Decoded, Payload } from "../types/tipos";

export const createToken = (Payload: Payload): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(Payload, process.env.JWT_SECRET, { expiresIn: "1d", noTimestamp: true }, (err, token) => {
      if (err) return reject(err);
      if (!token) return reject(new Error("No se pudo generar el token"));
      resolve(token);
    });
  });
};

export const verifyToken = (token: string): Promise<Decoded> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return reject(err);
      if (!decoded || typeof decoded !== "object") {
        return reject(new Error("Token inválido"));
      }
      resolve(decoded as Decoded);
    });
  });
};
