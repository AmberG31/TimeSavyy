import app from "../../app";
import { tasksController } from "../../controllers/tasks";
import request from "supertest";

jest.mock("../../controllers/tasks");

describe("Tasks routes", () => {
  beforeEach(() => jest.resetAllMocks());

  describe("GET /:userId route", () => {
    it("should return a list of tasks and a 200 status code", async () => {
      const mockTasks = [
        { _id: 1, title: "test 1" },
        { _id: 23, title: "test 2" },
      ];
      (tasksController.getTasksByUserId as jest.Mock).mockResolvedValue(
        mockTasks
      );

      const response = await request(app).get("/tasks/1");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(mockTasks);
      expect(tasksController.getTasksByUserId).toHaveBeenCalledWith(1);
    });

    it("should return a 400 status code and an error message if an error occurs", async () => {
      const errorMessage = "Something went wrong";
      (tasksController.getTasksByUserId as jest.Mock).mockRejectedValue(
        new Error(errorMessage)
      );

      const response = await request(app).get("/tasks/1");

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        `Error from GET /tasks/:userId : ${errorMessage}`
      );
      expect(tasksController.getTasksByUserId).toHaveBeenCalled();
    });

    it("should return a 400 status code and an error message if userId is not a number", async () => {
      const response = await request(app).get("/tasks/terry");

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        "Error from GET /tasks/:userId : Invalid user ID"
      );
    });
  });

  describe("POST route", () => {
    it("should return the latest task and a 201 status code", async () => {
      const mockTasks = { _id: 1, title: "test 1" };
      (tasksController.addTask as jest.Mock).mockResolvedValue(mockTasks);

      const body = { title: "test 1", content: "test content" };
      const response = await request(app).post("/tasks").send(body);

      expect(response.statusCode).toBe(201);
      expect(response.body).toEqual({
        data: mockTasks,
        message: "You have successfully added a new task!",
      });
      expect(tasksController.addTask).toHaveBeenCalledWith(body);
    });

    it("should return a 400 status code and an error message if an error occurs", async () => {
      const errorMessage = "Something went wrong";
      (tasksController.addTask as jest.Mock).mockRejectedValue(
        new Error(errorMessage)
      );

      const response = await request(app).post("/tasks");

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        `Error from POST /tasks: ${errorMessage}`
      );
      expect(tasksController.addTask).toHaveBeenCalled();
    });
  });
});
