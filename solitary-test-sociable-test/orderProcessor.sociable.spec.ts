import { test, vi, expect, describe } from "vitest";
import { OrderProcessor } from "./orderProcessor";
import { updateStock } from "./InventoryService";
import { sendEmail } from "./EmailService";

vi.mock("./EmailService.ts", () => {
  return {
    sendEmail: vi.fn(),
  };
});

// 群居
test("processOrder should succeed when there is enough stock", () => {
  // setup 因为测试需要 checkStock 返回 true, 所以需要先更新库存
  updateStock({ name: "hei", count: 1 });

  const orderProcessor = new OrderProcessor();

  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});
