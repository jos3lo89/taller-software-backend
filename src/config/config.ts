import { z } from "zod";

const envVars = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  CLIENT_URL: z.string(),
  JWT_SECRET: z.string(),
  VERSION_API: z.string(),
  NODE_ENV: z.string(),
  SERVER_URL: z.string(),
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
