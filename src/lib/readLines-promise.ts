import readline from "readline";
import { createReadStream } from "fs";

export const readLines = (filePath: string): readline.Interface => {
  return readline.createInterface({
    input: createReadStream(filePath, { encoding: "utf8" }),
  });
};
