import { vi, it, expect, describe } from "vitest";
import { UserService } from "./userService";
import { Database } from "./database";

describe("UserService", () => {
  it("should create user ", () => {
    // 与 vi.spyOn 一样
    // Database.prototype.addUser = vi.fn();
    const database = new Database();
    // 记录 addUser 的行为
    vi.spyOn(database, "addUser");
    console.log(database.addUser); // 多了非常多的 function 用于记录行为信息
    // 调用 addUser 之前 addUser.isCalled 是 false
    const userService = new UserService(database);
    // 调用 addUser 之后 addUser.isCalled 是 true

    userService.createUser("Ghosteye");

    expect(database.addUser).toBeCalled();
  });
});
