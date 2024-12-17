import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

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
      if (lines[x][y] === "X") {
        result += checkEightDirections(x, y, lines);
      }
    }
  }
  return result;
}

function checkEightDirections(x: number, y: number, lines: string[]) {
  let result = 0;
  result += checkDirections(x, y, 0, -1, "MAS", lines); // top
  result += checkDirections(x, y, 1, -1, "MAS", lines); // top right
  result += checkDirections(x, y, 1, 0, "MAS", lines); // right
  result += checkDirections(x, y, 1, 1, "MAS", lines); // bottom right
  result += checkDirections(x, y, 0, 1, "MAS", lines); // bottom
  result += checkDirections(x, y, -1, 1, "MAS", lines); // bottom left
  result += checkDirections(x, y, -1, 0, "MAS", lines); // left
  result += checkDirections(x, y, -1, -1, "MAS", lines); // top left
  return result;
}

function checkDirections(
  x: number,
  y: number,
  dx: number,
  dy: number,
  target: string,
  lines: string[]
): number {
  if (target.length <= 0) {
    return 1;
  }
  const newX = x + dx;
  const newY = y + dy;
  if (newX < 0 || newX >= lines.length || newY < 0 || newY >= lines[x].length) {
    return 0;
  }
  if (lines[newX][newY] !== target[0]) {
    return 0;
  }
  return checkDirections(newX, newY, dx, dy, target.substring(1), lines);
}
