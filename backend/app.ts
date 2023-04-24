import express from "express";
import usersRouter from "./routes/users";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/users", usersRouter);

export default app;
