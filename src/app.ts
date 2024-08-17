import express from "express";

const app = express();

app.use((_, res) => {
  res.status(404).json({ message: "Not found", status: 404 });
});
export default app;
