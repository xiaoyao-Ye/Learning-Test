import { it, expect, describe, vi } from "vitest";
import { getTips, login, loginV2 } from "./login";
import { appLogin } from "api";

vi.mock("api", () => {
  return {
    // appLogin: vi.fn(),
    // appLogin: vi.fn().mockReturnValue(true),
    appLogin: vi.fn(() => true),
  };
});

describe("login", () => {
  it("should called login function from api", () => {
    login("Ghosteye", "jiubugaosuni");

    // 验证是否调用了 appLogin 函数
    expect(appLogin).toBeCalled();
    // 是否调用了 appLogin 函数，并且传入了 Ghosteye 和 jiubugaosuni 两个参数
    // expect(appLogin).toBeCalledWith("Ghosteye", "jiubugaosuni");
    // 是否只调用了一次 appLogin 函数
    // expect(appLogin).toBeCalledTimes(1);
  });

  it("v2", () => {
    loginV2("Ghosteye", "jiubugaosuni");
    // 行为验证: 是否调用了 appLogin 函数
    expect(appLogin).toBeCalled();
    // 状态验证: tipString 是否为 login success
    expect(getTips()).toBe("login success");
  });
});
