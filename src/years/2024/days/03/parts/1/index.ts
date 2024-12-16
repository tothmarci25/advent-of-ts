import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  let result = 0;
  const lines = readLines(inputPath);
  for await (const line of lines) {
    result += parseMul(line);
  }
  return result;
};

function parseMul(line: string): number {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  let result = 0;
  while ((match = regex.exec(line)) !== null) {
    const [, x, y] = match;
    result += parseInt(x) * parseInt(y);
  }
  return result;
}
