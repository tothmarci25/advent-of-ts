import { join } from "path";
import readline from "readline";
import { createReadStream } from "fs";
import { parseLine } from "../1";

export const xor = (a: boolean, b: boolean): boolean => (a ? !b : b);

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: createReadStream(inputPath, { encoding: "utf8" }),
    });
    input.on("line", (line) => {
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
    input.on("close", () => resolve(result));
  });
};
