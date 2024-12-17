import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  let result = 0;
  const lines = readLines(inputPath);
  for await (const line of lines) {
    result += processLine(line);
  }
  return result;
};

export function processLine(line: string): number {
  let result = 0;
  const fixedLine = `do()${line}don't()`;
  for (const doMatch of parseDo(fixedLine)) {
    for (const mulMatch of parseMul(doMatch[0])) {
      const [, x, y] = mulMatch;
      result += parseInt(x) * parseInt(y);
    }
  }
  return result;
}

function parseDo(line: string) {
  const doRegex = /do\(\)(.*?)don't\(\)/g;
  return line.matchAll(doRegex);
}

function parseMul(line: string) {
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  return line.matchAll(mulRegex);
}
