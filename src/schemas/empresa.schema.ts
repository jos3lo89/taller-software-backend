import { z } from "zod";

export const empresaCreateSchemaZod = z.object({
  name: z.string({ required_error: "Nombre requerido" }),
  telphone: z.string({ required_error: "telefono requerido" }).min(9).max(10),
  email: z.string({ required_error: "email requerido" }).email(),
  address: z.string({ required_error: "direccion requerido" }),
});

export type EmpresaType = z.infer<typeof empresaCreateSchemaZod>;
