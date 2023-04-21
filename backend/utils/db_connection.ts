import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const database =
  process.env.NODE_ENV === "test" ? "time_savvy_test" : "time_savvy";

export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
});
