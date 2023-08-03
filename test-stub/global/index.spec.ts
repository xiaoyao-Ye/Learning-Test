import { it, expect, vi } from "vitest";
import { doubleHeight, getGlobalUser } from "./global";

// vi.mock("./window.ts", () => {
//   return {
//     innerHeightFn: () => 100,
//   }
// })

it("should", () => {
  vi.stubGlobal("innerHeight", 100);

  const res = doubleHeight();

  expect(res).toBe(200);
});

it("should", () => {
  vi.stubGlobal("user", { name: "Ghosteye" });

  const res = getGlobalUser();

  expect(res).toBe("username is Ghosteye");
});
