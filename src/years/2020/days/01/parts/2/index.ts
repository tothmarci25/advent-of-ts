import { readFileSync } from "fs";
import { join } from "path";

export const readInput = (filePath: string): number[] => {
  const file = readFileSync(filePath, { encoding: "utf8" });
  const lines = file.split("\n").map((line) => parseInt(line));
  lines.pop();
  return lines;
};

export const processInput = (input: number[]): number | void => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
};

export default async (): Promise<number | void> => {
  const input = readInput(join(__dirname, "../../input.txt"));
  return processInput(input);
};
