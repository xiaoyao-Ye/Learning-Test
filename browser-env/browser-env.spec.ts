import { test, expect } from "vitest";
import { getName } from "./browser-env";
// import { Window } from "happy-dom";

test("browser-env", () => {
//   const window = new Window();
  // console.log(window)
//   globalThis.localStorage = window.localStorage;
  localStorage.setItem("name", "Ghosteye");
  expect(getName()).toBe("Ghosteye");
});
