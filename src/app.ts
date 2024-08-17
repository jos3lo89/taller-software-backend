import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
const versionApi = process.env.VERSION_API;

app.use(versionApi, authRoutes);

app.all("/ping", (_, res) => {
  res.status(200).json({ message: ["Pong"] });
});

app.use((_, res) => {
  res.status(404).json({ message: "Not found", status: 404 });
});

export default app;
