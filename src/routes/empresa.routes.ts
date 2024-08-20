import { Router } from "express";
import empresaController from "../controllers/empresa.controller";
import { schemaValidator } from "../middlewares/schema.middleware";
import { fileOneUploader } from "../middlewares/multer.middleware";
import { empresaCreateSchemaZod } from "../schemas/empresa.schema";
import { oneFileValidate } from "../middlewares/files.middleware";

const route = Router();

// crear un empresa
route.post(
  "/create",
  fileOneUploader("photo"),
  oneFileValidate,
  schemaValidator(empresaCreateSchemaZod),
  empresaController.create
);

export default route;
