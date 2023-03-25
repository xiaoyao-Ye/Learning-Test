import { test } from "vitest";

test.only("only 只执行这个测试", () => {});

test.skip("skip 跳过这个测试", () => {});

test.todo("todo 添加todo", () => {});

// 功能
// 1. xxx add
// 2. xxx remove
test.todo("add");
test.todo("remove");
// 开发完成后把 todo 去掉
test("add", () => {});
test("remove", () => {});
