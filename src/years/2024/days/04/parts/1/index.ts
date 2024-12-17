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
  for (let x = 0; x < lines.length; x++) {
    for (let y = 0; y < lines[x].length; y++) {
      result += checkEightDirections([x, y], lines);
    }
  }
  return result;
}

function checkEightDirections(position: Position, lines: string[]) {
  const target = "XMAS";
  const directions: Position[] = [
    [0, -1], // top
    [1, -1], // top right
    [1, 0], // right
    [1, 1], // bottom right
    [0, 1], // bottom
    [-1, 1], // bottom left
    [-1, 0], // left
    [-1, -1], // top left
  ];
  return directions.reduce((result, direction) => {
    return result + checkDirections(position, direction, target, lines);
  }, 0);
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
