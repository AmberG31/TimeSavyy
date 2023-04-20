import { pool } from "../utils/db_connection";

export const userController = {
  getAllUsers: async () => {
    const sql = "SELECT * FROM users";
    try {
      const response = await pool.query(sql);
      return response.rows;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
