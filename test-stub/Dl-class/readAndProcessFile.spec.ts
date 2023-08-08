import { it, expect, describe } from "vitest";
import { ReadAndProcessFile } from "./readAndProcessFile";
import type { FileRender } from "./readAndProcessFile";

describe("di class", () => {
  // it("构造函数", () => {
  //   class StubFileRender implements FileRender {
  //     read(filePath: string) {
  //       return "test ";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile(new StubFileRender());
  //   const res = readAndProcessFile.run("./test.txt");
  //   expect(res).toBe("test -> Ghosteye");
  // });

  // it("属性", () => {
  //   class StubFileRender implements FileRender {
  //     read(filePath: string) {
  //       return "test ";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile();
  //   readAndProcessFile.fileRender = new StubFileRender();
  //   const res = readAndProcessFile.run("./test.txt");
  //   expect(res).toBe("test -> Ghosteye");
  // });

  it("方法", () => {
    class StubFileRender implements FileRender {
      read(filePath: string) {
        return "test ";
      }
    }

    const readAndProcessFile = new ReadAndProcessFile();
    readAndProcessFile.setFileRender(new StubFileRender());
    const res = readAndProcessFile.run("./test.txt");
    expect(res).toBe("test -> Ghosteye");
  });
});
