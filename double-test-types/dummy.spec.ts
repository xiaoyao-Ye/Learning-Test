import { test } from "vitest";
import { Message, Recipient, sendEmail } from "./dummy";

test("EmailService", () => {
  const message: Message = {
    subject: "heihei",
    body: "hahaha",
  };
  // 创建一个基础数据结构, 占位
  // const dummyRecipient: Recipient = {
  //   email: "",
  //   name: "",
  // };
  // 创建一个空对象, 占位
  const dummyRecipient = {} as Recipient;
  sendEmail(message, dummyRecipient);
  // 直接使用对象字面量和断言
  sendEmail(message, {} as Recipient);
});
