import express from "express";
import { tasksController } from "../controllers/tasks";
import { TaskInput } from "../../types/task";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (!userId) {
      throw new Error("Invalid user ID");
    }
    const tasks = await tasksController.getTasksByUserId(userId);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send({
      message: `Error from GET /tasks/:userId : ${(error as Error).message}`,
    });
  }
});

router.post("/", async (req, res) => {
  const task: TaskInput = req.body;
  try {
    const newTask = await tasksController.addTask(task);
    res.status(201).send({
      data: newTask,
      message: "You have successfully added a new task!",
    });
  } catch (error) {
    res.status(400).send({
      message: `Error from POST /tasks: ${(error as Error).message}`,
    });
  }
});

export default router;
