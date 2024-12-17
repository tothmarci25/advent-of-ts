import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

type Position = [number, number];

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  const lines: string[] = [];
  for await (const line of readLines(inputPath)) {
    lines.push(line);
  }
  return processLines(lines);
};

export function processLines(lines: string[]): number {
  let result = 0;
  for (let x = 1; x < lines.length - 1; x++) {
    for (let y = 1; y < lines[x].length - 1; y++) {
      result += checkEightDirections([x, y], lines);
    }
  }
  return result;
}

function checkEightDirections([x, y]: Position, lines: string[]): number {
  if (
    (checkDirections([x - 1, y - 1], [1, 1], "MAS", lines) ||
      checkDirections([x - 1, y - 1], [1, 1], "SAM", lines)) &&
    (checkDirections([x - 1, y + 1], [1, -1], "MAS", lines) ||
      checkDirections([x - 1, y + 1], [1, -1], "SAM", lines))
  ) {
    return 1;
  }
  return 0;
}

function checkDirections(
  [x, y]: Position,
  [dx, dy]: Position,
  target: string,
  lines: string[]
): number {
  if (target.length <= 0) {
    return 1;
  }
  if (x < 0 || x >= lines.length || y < 0 || y >= lines[x].length) {
    return 0;
  }
  if (lines[x][y] !== target[0]) {
    return 0;
  }
  return checkDirections(
    [x + dx, y + dy],
    [dx, dy],
    target.substring(1),
    lines
  );
}
