import { vi, it, expect, describe } from "vitest";
import { delay, fetchUserData } from "./index";

describe("Promise", () => {
  it("normal", async () => {
    const result = await fetchUserData();

    expect(result).toBe("1");
  });

  it("delay", async () => {
    vi.useFakeTimers();

    // error case
    // vi.advanceTimersToNextTimer();
    // const result = await delay(1000);
    // vi.advanceTimersToNextTimer();

    // 先拿到 promise 对象不用 await
    const result = delay(100);
    // 再调用 advanceTimersToNextTimer 快进时间
    vi.advanceTimersToNextTimer();
    // 最后取出 promise 的 resolve 值
    expect(result).resolves.toBe("ok");
  });
});
