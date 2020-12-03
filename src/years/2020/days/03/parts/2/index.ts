import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  const result = [0, 0, 0, 0, 0];
  let step = 0;
  let alterStep = 0;
  let alter = true;
  await readLines(inputPath, (line) => {
    if (line[step % line.length] === "#") {
      result[0] += 1;
    }
    if (line[(step * 3) % line.length] === "#") {
      result[1] += 1;
    }
    if (line[(step * 5) % line.length] === "#") {
      result[2] += 1;
    }
    if (line[(step * 7) % line.length] === "#") {
      result[3] += 1;
    }
    if (alter) {
      if (line[alterStep % line.length] === "#") {
        result[4] += 1;
      }
      alterStep += 1;
    }
    alter = !alter;
    step += 1;
  });
  return result.reduce((a, b) => a * b);
};
