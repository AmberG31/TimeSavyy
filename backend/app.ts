import express from "express";
import usersRouter from "./routes/users";
import tasksRouter from "./routes/tasks";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

export default app;
