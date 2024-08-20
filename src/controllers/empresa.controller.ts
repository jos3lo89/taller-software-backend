import { Request, Response } from "express";
import EmpresaModel from "../models/empresa.model";
import { EmpresaType } from "../schemas/empresa.schema";
import { sendSuccess, sendError, HttpStatus } from "../utils/requestHandler";

class EmpresaController {
  async create(req: Request, res: Response) {
    try {
      if (!req.file) {
        return sendError(res, "No se encontró la foto", HttpStatus.BAD_REQUEST);
      }

      const body: EmpresaType = { ...req.body };
      const photo = `/uploads/${req.file.filename}`;

      const newCompany = await EmpresaModel.create(body, photo);

      sendSuccess(
        res,
        {
          ...newCompany,
          photo: `${process.env.SERVER_URL}${newCompany.photo}`,
        },
        HttpStatus.CREATED
      );
    } catch (error) {
      if (error instanceof Error) {
        sendError(res, error.message, HttpStatus.BAD_REQUEST);
      } else {
        sendError(res, "Error interno del servidor", HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}

export default new EmpresaController();
