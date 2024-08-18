import { z } from "zod";

export const empresaCreateSchemaZod = z.object({
  name: z.string(),
  telphone: z.string().min(9).max(10),
  email: z.string().email(),
  address: z.string(),
});
