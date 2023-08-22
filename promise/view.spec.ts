import { it, expect, describe } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

// flushPromises 源码很简单, 如果不想引入这个库, 可以自己 copy 一个放到 utils 里面

describe("View", () => {
  it("should change count", async () => {
    const view = new View();
    // await view.render(); // error case
    // 关于 promise 嵌套 promise 的情况进行测试
    view.render();
    await flushPromises();

    expect(view.count).toBe(3);
  });
});
