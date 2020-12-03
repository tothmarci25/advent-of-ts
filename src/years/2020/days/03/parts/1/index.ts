import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  let step = 0;
  await readLines(inputPath, (line) => {
    if (line[(step * 3) % line.length] === "#") {
      result += 1;
    }
    step += 1;
  });
  return result;
};
