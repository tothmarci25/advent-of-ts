import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let safeLevelsCount = 0;
  await readLines(inputPath, (line) => {
    const levels = line.split(" ");
    if (isSafeReport(levels)) {
      safeLevelsCount += 1;
    }
  });
  return safeLevelsCount;
};

function isSafeReport(levels: string[]): boolean {
  const diffs = getLevelDiffs(levels);
  return (
    isAllAtLeastOne(diffs) &&
    isAllAtMostThree(diffs) &&
    (isAllDecreasing(diffs) || isAllIncreasing(diffs))
  );
}

function getLevelDiffs(levels: string[]): number[] {
  const diffs: number[] = [];
  levels.reduce((prev, next) => {
    diffs.push(parseInt(prev) - parseInt(next));
    return next;
  });
  return diffs;
}

function isAllAtLeastOne(diffs: number[]): boolean {
  return diffs.every((diff) => Math.abs(diff) >= 1);
}

function isAllAtMostThree(diffs: number[]): boolean {
  return diffs.every((diff) => Math.abs(diff) <= 3);
}

function isAllDecreasing(diffs: number[]): boolean {
  return diffs.every((diff) => diff > 0);
}

function isAllIncreasing(diffs: number[]): boolean {
  return diffs.every((diff) => diff < 0);
}
