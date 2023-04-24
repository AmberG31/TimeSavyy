import app from "../../app";
import { userController } from "../../controllers/users";
import request from "supertest";

jest.mock("../../controllers/users");

describe("Users route", () => {
  beforeEach(() => jest.resetAllMocks());

  describe("GET route", () => {
    it("should return a list of users and a 200 status code", async () => {
      const mockUsers = [{ name: "Amber" }, { name: "Terry" }];
      (userController.getAllUsers as jest.Mock).mockResolvedValue(mockUsers);

      const response = await request(app).get("/users");

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(mockUsers);
      expect(userController.getAllUsers).toHaveBeenCalled();
    });

    it("should return a 400 status code and an error message if an error occurs", async () => {
      const errorMessage = "Something went wrong";
      (userController.getAllUsers as jest.Mock).mockRejectedValue(
        new Error(errorMessage)
      );

      const response = await request(app).get("/users");

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        `Error from GET /users: ${errorMessage}`
      );
      expect(userController.getAllUsers).toHaveBeenCalled();
    });
  });
});
