import fs from "fs";
import { pool } from "./db_connection";

const sql = fs.readFileSync("./seeds/time_savvy_seeds.sql").toString();

export const resetDB = async () => {
  await pool.query(sql);
};
