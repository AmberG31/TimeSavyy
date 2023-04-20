import express from "express";
import { userController } from "../controllers/users";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: `Error from GET /users: ${error}` });
  }
});

export default router;
