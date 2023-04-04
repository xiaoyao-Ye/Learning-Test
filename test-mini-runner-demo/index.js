import glob from "glob";
import fs from "fs/promises";
import { build } from "esbuild";

// 获取所有的测试脚本 *.space.js *.test.js
// 执行所有的测试脚本

const fileNameList = glob.sync("*.{spec,test}.js");

// console.log(fileNameList);

async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false,
    bundle: true,
    target: "esnext",
  });
  // console.log(result.outputFiles[0].text);

  new Function(result.outputFiles[0].text)();
}

fileNameList.forEach(async (fileName) => {
  const fileContent = await fs.readFile(fileName, "utf-8");
  await runModule(fileContent + 'import { run } from "./core.js"; run();');
});
