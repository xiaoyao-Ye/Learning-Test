import { describe, expect, expectTypeOf, it } from "vitest";

// describe 一般最多嵌套两层，如果嵌套层级过多，可以考虑拆分成多个文件 test suit(测试套件)
describe("describe", () => {
  const user = {
    name: "vitest",
    age: 1,
  };

  it("should be a object", () => {
    expectTypeOf(user).toBeObject();
  });

  describe("item", () => {
    it("should be a name", () => {
      expect(user.name).toBe("vitest");
    });

    it("should be a age", () => {
      expect(user.age).toBe(1);
    });
  });

  it("should be a keys", () => {
    expect(Object.keys(user).length).toBe(2);
  });
});

// filter 只执行匹配的测试 only skip

// 测试套件 test suit 测试 add 功能
describe.skip("add", () => {
  // skip 跳过测试
  it("should be a number", () => {
    expect(1 + 2).toBe(3);
  });
});

// 两个only 都会执行
// 测试 remove 功能
describe.only("remove", () => {
  // only 只执行这个测试
  it("should be a number", () => {
    expect(1 - 2).toBe(-1);
  });
});

// 测试 edit 功能
describe.only("edit", () => {
  // only 只执行这个测试
  it("should be a number", () => {
    expect(1 - 2).toBe(-1);
  });
});
