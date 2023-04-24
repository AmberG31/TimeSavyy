import { Task } from "../../../types/task";
import { tasksController } from "../../controllers/tasks";
import { pool } from "../../utils/db_connection";
import { resetDB } from "../../utils/test_helpers";

describe("userController", () => {
  beforeEach(async () => await resetDB());

  afterAll(async () => await pool.end());

  describe("#getTasksByUserId", () => {
    it("should return all tasks from a certain user", async () => {
      const tasks: Task[] = await tasksController.getTasksByUserId(1);

      expect(tasks.length).toEqual(1);
      expect(tasks[0].user_id).toEqual(1);
      expect(tasks[0].title).toEqual("loundry");
      expect(tasks[0].is_priority).toEqual(false);
    });
  });
});
