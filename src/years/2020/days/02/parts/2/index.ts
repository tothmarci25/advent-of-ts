import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";
import { parseLine } from "../1";

export const xor = (a: boolean, b: boolean): boolean => a !== b;

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  await readLines(inputPath, (line) => {
    const parsedLine = parseLine(line);
    if (
      xor(
        parsedLine.password[parsedLine.min - 1] === parsedLine.value,
        parsedLine.password[parsedLine.max - 1] === parsedLine.value
      )
    ) {
      result += 1;
    }
  });
  return result;
};
