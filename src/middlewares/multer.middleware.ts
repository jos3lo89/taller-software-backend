import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename(req, file, callback) {
    const fileName = `${Date.now()}-${Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}${path.extname(file.originalname)}`;

    callback(null, fileName);
  },
});

const uploader = multer({ storage });

// Subir un solo archivo
export const fileOneUploader = (name: string) => {
  return uploader.single(name);
};

// Subir multiples archivos
export const fileMultiUploader = (names: string[]) => {
  return uploader.fields([
    { name: names[0], maxCount: 1 },
    { name: names[1], maxCount: 1 },
  ]);
};
