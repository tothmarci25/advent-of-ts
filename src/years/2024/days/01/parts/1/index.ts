import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  const leftList: number[] = [];
  const rightList: number[] = [];
  await readLines(inputPath, (line) => {
    const [left, right] = line.split("   ");
    leftList.push(Number.parseInt(left));
    rightList.push(Number.parseInt(right));
  });
  leftList.sort();
  rightList.sort();
  let result = 0;
  for (let i = 0; i < leftList.length; i++) {
    const diff = Math.abs(leftList[i] - rightList[i]);
    result += diff;
  }
  return result;
};
