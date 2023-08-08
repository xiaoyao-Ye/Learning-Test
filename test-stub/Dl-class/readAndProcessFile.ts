// import { readFileSync } from "fs";

// 强依赖与 readFileSync 不利于测试
// export class ReadAndProcessFile {
//   run(filePath: string) {
//     const content = readFileSync(filePath, { encoding: "utf-8" });
//     return content + "-> Ghosteye";
//   }
// }

export interface FileRender {
  read: (filePath: string) => string;
}

// 通过依赖注入的方式解决强依赖, 利于测试
// 构造函数的方式
// export class ReadAndProcessFile {
//   private _fileRender: FileRender;
//   constructor(fileRender: FileRender) {
//     this._fileRender = fileRender;
//   }
//   run(filePath: string) {
//     const content = this._fileRender.read(filePath);
//     return content + "-> Ghosteye";
//   }
// }

// 属性的方式
// export class ReadAndProcessFile {
//   private _fileRender!: FileRender;
//   constructor() {}
//   run(filePath: string) {
//     const content = this.fileRender.read(filePath);
//     return content + "-> Ghosteye";
//   }

//   get fileRender() {
//     return this._fileRender;
//   }

//   set fileRender(fileRender: FileRender) {
//     this._fileRender = fileRender;
//   }
// }

// 方法的方式
export class ReadAndProcessFile {
  private _fileRender!: FileRender;
  constructor() {}
  run(filePath: string) {
    const content = this._fileRender.read(filePath);
    return content + "-> Ghosteye";
  }

  setFileRender(fileRender: FileRender) {
    this._fileRender = fileRender;
  }
}
