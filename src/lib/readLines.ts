import readline from "readline";
import { createReadStream } from "fs";

export const readLines = async (
  filePath: string,
  onLine: (line: string) => void
): Promise<void> => {
  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: createReadStream(filePath, { encoding: "utf8" }),
    });
    input.on("line", onLine);
    input.on("close", () => resolve());
  });
};
