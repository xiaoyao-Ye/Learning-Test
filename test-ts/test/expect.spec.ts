import { it, expect, describe, test } from "vitest";

// expect 断言
describe("expect", () => {
  // it 和 test 是一样的, 看个人习惯和团队风格
  test("should ", () => {});
  it("toBe", () => {
    // 这里的 toBe 是全等的意思
    expect(1).toBe(1);
  });

  it("toEqual", () => {
    // 这里的 toEqual 是深度相等的意思, 用于比较对象
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  it("toBeTruthy", () => {
    // toBeTruthy 用于判断是否为真
    expect(1).toBeTruthy();
    expect(true).toBeTruthy();
    expect("21").toBeTruthy();
  });

  it("toBeFalsy", () => {
    // toBeFalsy 用于判断是否为假
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
  });

  it("toContain", () => {
    // toContain 用于判断:
    // 数组中是否包含某个值,
    // 字符串中是否包含某个子串,
    // 对象中是否包含某个属性,
    //  Map 中是否包含某个键,
    //  Set 中是否包含某个值
    const item1 = [1, 2];
    const item2 = [2, 3];
    const item3 = [2, 3];
    const list = [item1, item2];
    expect(list).toContain(item1);
    // expect(list).toContain(item3);
    expect("<div>123</div>").toContain("123");
  });

  it("toBeThrow", () => {
    // toBeThrow 用于判断是否抛出异常
    function throwError(name: any) {
      if (typeof name !== "string") {
        throw new Error("错误的name");
      }
      return name;
    }

    expect(() => {
      //   throw new Error("123");
      throwError(123);
    }).toThrow();

    expect(() => {
      throwError(123);
    }).toThrow("错误的name");
  });
});
