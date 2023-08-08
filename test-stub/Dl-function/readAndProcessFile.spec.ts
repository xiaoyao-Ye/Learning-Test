import { it, expect, describe } from "vitest";
import { FileRender, readAndProcessFile } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    class TxtFileRender implements FileRender {
      read(filePath: string) {
        return "test ";
      }
    }

    const res = readAndProcessFile("test.txt", new TxtFileRender());
    expect(res).toBe("test -> Ghosteye");
  });
});
