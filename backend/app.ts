import express from "express";
import terryRouter from "./routes/terry";
import cors from "cors";
const app = express();
const port = 8081;

app.use(cors());

// http://localhost:8081/
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/terry", terryRouter);

app.listen(port, () => {
  console.log(`Express server is now running on port ${port}`);
});
