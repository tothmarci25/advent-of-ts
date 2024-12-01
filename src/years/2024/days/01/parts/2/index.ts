import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  const leftList: number[] = [];
  const rightMap: { [key: number]: number } = {};
  await readLines(inputPath, (line) => {
    const [left, right] = line.split("   ");
    leftList.push(Number.parseInt(left));
    const rightNumber = Number.parseInt(right);
    rightNumber in rightMap
      ? rightMap[rightNumber]++
      : (rightMap[rightNumber] = 1);
  });
  let result = 0;
  for (let i = 0; i < leftList.length; i++) {
    result += leftList[i] in rightMap ? leftList[i] * rightMap[leftList[i]] : 0;
  }
  return result;
};
