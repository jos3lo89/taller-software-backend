import app from "./app";
import "./config/config";

app.listen(process.env.PORT, () => {
  console.log(`server listening on the port: ${process.env.PORT}`);
});
