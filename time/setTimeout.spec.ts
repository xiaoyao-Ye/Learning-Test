import { vi, it, expect, describe } from "vitest";
import { User } from "./setTimeout";

// describe("setTimeout", () => {
//   it("should fetch User data", () => {
//     vi.useFakeTimers();
//     const user = new User("1");

//     const callback = vi.fn();
//     user.fetchDataV2(callback);
//     // vi.advanceTimersByTime(1000)
//     // vi.advanceTimersToNextTimer();

//     const userA = new User("1");

//     const callbackA = vi.fn();
//     userA.fetchDataV2(callbackA);
//     // vi.advanceTimersToNextTimer();

//     vi.runAllTimers();

//     expect(callback).toBeCalledWith("Data for user with id: 1");
//     expect(callbackA).toBeCalledWith("Data for user with id: 1");
//   });
// });

describe("setTimeout", () => {
  it("should fetch User data", () => {
    vi.useFakeTimers();
    const user = new User("1");

    const callback = vi.fn();
    user.fetchData(callback, 1000);
    // vi.advanceTimersByTime(1000);  // 时间快进 1000ms
    vi.advanceTimersToNextTimer(); // 推荐使用

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });

  it("should fetch User data", () => {
    vi.useFakeTimers();
    const user = new User("1");

    const callback = vi.fn();
    user.fetchDataV2(callback);
    // 这里 delay 是写死的 2000, 使用 advanceTimersToNextTimer 避免重构更改时间后测试不通过
    vi.advanceTimersToNextTimer();

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });

  it("should fetch User data, all", () => {
    vi.useFakeTimers();
    const user = new User("1");
    const callback = vi.fn();
    user.fetchData(callback, 1000);

    const user2 = new User("2");
    const callbackV2 = vi.fn();
    user2.fetchDataV2(callbackV2);

    vi.runAllTimers(); // 运行所有的定时器

    expect(callback).toBeCalledWith("Data for user with id: 1");
    expect(callbackV2).toBeCalledWith("Data for user with id: 2");
  });
});
