import { join } from "path";
import readline from "readline";
import { createReadStream } from "fs";

export type ParsedLine = {
  min: number;
  max: number;
  value: string;
  password: string;
};

export const parseLine = (line: string): ParsedLine => {
  // 1-3 a: abcde
  const [left, right] = line.split(":");
  const [rules, value] = left.split(" ");
  const [min, max] = rules.split("-");
  const password = right.split(" ")[1];
  return {
    min: parseInt(min),
    max: parseInt(max),
    value,
    password,
  };
};

export const countOccurence = (letter: string, password: string): number => {
  return (password.match(new RegExp(letter, "g")) || []).length;
};

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: createReadStream(inputPath, { encoding: "utf8" }),
    });
    input.on("line", (line) => {
      const parsedLine = parseLine(line);
      const count = countOccurence(parsedLine.value, parsedLine.password);
      if (count >= parsedLine.min && count <= parsedLine.max) {
        result += 1;
      }
    });
    input.on("close", () => resolve(result));
  });
};
