import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Welcome to the server");
});

export default app;
