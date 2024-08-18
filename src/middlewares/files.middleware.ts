import { NextFunction, Request, Response } from "express";

import * as fs from "node:fs/promises";

export const oneFileValidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;

    if (!file) throw new Error("No se ha encontrado el archivo");

    const isValidMimeType = /jpeg|jpg|png|webp/.test(file.mimetype);

    if (!isValidMimeType) {
      await fs.unlink(`./public/uploads/${file.filename}`);
      throw new Error("Sólo se permiten imágenes de tipo jpeg, jpg, png y webp.");
    }

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: [error.message] });
    }

    return res.status(400).json({ message: error });
  }
};
