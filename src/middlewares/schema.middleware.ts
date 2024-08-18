import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";
import { removeFilefs } from "../utils/file.utils";

export const schemaValidator = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = Object.getPrototypeOf(req.body) === null ? { ...req.body } : req.body;

    schema.parse(body);

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      if (req.file) await removeFilefs(req.file.filename);

      return res.status(400).json({ message: error.errors.map((e) => e.message) });
    }

    return res.status(500).json({ message: [error] });
  }
};
