import { pool } from "../utils/db_connection";
import { TaskInput, type Task } from "../../types/task";

export const tasksController = {
  getTasksByUserId: async (userId: number): Promise<Task[]> => {
    const query = {
      text: "SELECT * FROM tasks WHERE user_id = $1",
      values: [userId],
    };

    try {
      const response = await pool.query(query);
      return response.rows;
    } catch (error) {
      throw new Error(error as string);
    }
  },

  addTask: async (task: TaskInput) => {
    const sql = "";
  },
};
