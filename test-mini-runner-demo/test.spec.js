import {
  test,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  describe,
} from "./core.js";

test("desc: test", () => {
  console.log("test");
});

it("desc: it", () => {
  console.log("it");
});

// test.only("desc: test.only", () => {
//   console.log("test.only");
// });

test("desc: expect toBe", () => {
  console.log("expect toBe");
  // expect(1 + 1).toBe(3);
  expect(1 + 1).toBe(2);
});

test("desc: expect toEqual", () => {
  console.log("expect toEqual");
  const arr = [1, 2, 3];
  expect(arr).toEqual([1, 2, 3]);
  expect({ 0: 1, 1: 2, 2: 3 }).toEqual({ 0: 1, 1: 2, 2: 3 });
});

afterAll(() => {
  console.log("afterAll");
});

beforeAll(() => {
  console.log("beforeAll");
  return () => {
    console.log("afterAll return");
  };
});

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

describe("desc: describe", () => {
  test("desc: describe test", () => {
    console.log("describe test");
  });
});
