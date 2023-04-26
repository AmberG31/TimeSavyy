import { pool } from "../utils/db_connection";
import { type TaskInput, type Task } from "../../types/task";

export const tasksController = {
  getTasksByUserId: async (userId: number): Promise<Task[]> => {
    const query = {
      text: `SELECT id, title, content, is_completed, is_priority, due_date, "createdAt" FROM tasks WHERE user_id = $1;`,
      values: [userId],
    };

    try {
      const response = await pool.query(query);
      return response.rows;
    } catch (error) {
      throw new Error(error as string);
    }
  },

  addTask: async (task: TaskInput): Promise<Task> => {
    const { title, content, due_date, user_id } = task;
    const query = {
      text: "INSERT INTO tasks(title, content, due_date, user_id) VALUES($1, $2, $3, $4) RETURNING *",
      values: [title, content, due_date, user_id],
    };

    try {
      const response = await pool.query(query);
      return response.rows[0];
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
