import express from "express";
import router from "./routes/router.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.port || 4000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`👉 http://localhost:${port}`);
});
