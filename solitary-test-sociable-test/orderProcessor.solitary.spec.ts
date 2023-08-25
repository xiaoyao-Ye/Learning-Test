import { OrderProcessor } from "./orderProcessor";
import { vi, test, expect, describe } from "vitest";
import { sendEmail } from "./EmailService";

// 大量的 mock 代码(如果有更多的依赖, 意味着需要写更多的 mock 代码)
vi.mock("./EmailService", () => {
  return {
    sendEmail: vi.fn(),
  };
});

vi.mock("./InventoryService.ts", () => {
  return {
    //stub
    checkStock() {
      return true;
    },
  };
});

// 测试不到 checkStock 因为 mock 让它永远返回 true

// 独居-单独去测试了 sendEmail, 而 checkStock 只是作为一个 stub 没有去测试
// 可以更精准的去定位问题, 因为调用了哪个函数我们是清楚的
test("processOrder should succeed when there is enough stock", () => {
  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});
