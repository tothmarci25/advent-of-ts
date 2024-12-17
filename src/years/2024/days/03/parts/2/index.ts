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
  const regex = /do\(\)((?:(?!do\(|don't\().)*mul\((\d+),(\d+)\))+/gs;
  const innerRegex = /mul\((\d+),(\d+)\)/g;

  for (const match of fixedLine.matchAll(regex)) {
    const innerMatches = match[0].matchAll(innerRegex);
    for (const m of innerMatches) {
      const [, x, y] = m;
      result += parseInt(x) * parseInt(y);
    }
  }
  return result;
}
