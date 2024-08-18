import * as fs from "node:fs/promises";

export const removeFilefs = async (filePath: string) => {
  try {
    const route = "./public/uploads/";
    await fs.unlink(`${route}${filePath}`);
  } catch (error) {
    console.error(`Error removing file at ${filePath}:`, error);
    throw new Error("Error removing file");
  }
};
