import { it, expect, vi, afterEach } from "vitest";
import { getUserName } from "./helper";

it("test-stub", () => {
  // process.env.USER_NAME = "Ghosteye";
  vi.stubEnv("USER_NAME", "Ghosteye");

  const res = getUserName();

  expect(res).toBe("username is Ghosteye");

  vi.unstubAllEnvs();
});

it("should", () => {
  console.log(process.env.USER_NAME);
});

afterEach(() => {
  vi.unstubAllEnvs();
});

