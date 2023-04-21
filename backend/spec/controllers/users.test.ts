import { userController } from "../../controllers/users";
import { resetDB } from "../../utils/test_helpers";

describe("userController", () => {
  beforeEach(async () => await resetDB());

  describe("#getAllUsers", () => {
    it("should return all users", async () => {
      const users = await userController.getAllUsers();

      expect(users.length).toEqual(2);
      expect(users[0].username).toEqual("user1");
      expect(users[0].id).toEqual(1);
    });
  });
});
