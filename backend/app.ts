import express from "express";
import usersRouter from "./routes/users";
import cors from "cors";
const app = express();
const port = 8081;

app.use(cors());

// http://localhost:8081/
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Express server is now running at http://localhost:${port}`);
});
