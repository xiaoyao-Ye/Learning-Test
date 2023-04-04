import {
  test,
  afterAll,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
} from "vitest";

describe("执行顺序", () => {
  // beforeAll -> beforeEach -> it/test -> afterEach -> afterAll
  // 只执行一次 在最开始的时候
  // 使用场景比如 数据库连接 创建临时文件
  beforeAll(() => {
    console.log("beforeAll");
    return () => {
      // afterAll vitest 允许直接返回一个afterAll函数
    };
  });

  // 只执行一次 在最后的时候
  // 断开连接 删除临时文件
  afterAll(() => {
    console.log("afterAll");
  });

  // pinia store
  beforeEach(() => {
    console.log("beforeEach");
    return () => {
      // afterEach vitest 允许直接返回一个 afterEach 函数
    };
  });

  afterEach(() => {
    console.log("afterEach");
  });

  test("first", () => {
    console.log("first");
  });

  test("second", () => {
    console.log("second");
  });
});
