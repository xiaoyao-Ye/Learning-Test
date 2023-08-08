// import { readFileSync } from "fs";

// const readAndProcessFile = (filePath: string): string => {
//   // 当前强依赖 redFileSync
//   const content = readFileSync(filePath, { encoding: "utf8" });
//   // 实际场景下可能 process 的过程会比较复杂
//   return content + "-> Ghosteye";
// };

// export { readAndProcessFile };

interface FileRender {
  read: (filePath: string) => string;
}

const readAndProcessFile = (
  filePath: string,
  fileRender: FileRender
): string => {
  const content = fileRender.read(filePath);
  return content + "-> Ghosteye";
};

export { readAndProcessFile, FileRender };
