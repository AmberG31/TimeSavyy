import { pool } from "../utils/db_connection";
import { type User } from "../../types/user";

export const userController = {
  getAllUsers: async (): Promise<User[]> => {
    const sql = "SELECT * FROM users";
    try {
      const response = await pool.query(sql);
      return response.rows;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
