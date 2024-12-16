import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  let result = 0;
  const lines = readLines(inputPath);
  for await (const line of lines) {
    for (const mul of parseMul(line)) {
      const [, x, y] = mul;
      result += parseInt(x) * parseInt(y);
    }
  }
  return result;
};

function parseMul(line: string) {
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  return line.matchAll(mulRegex);
}
