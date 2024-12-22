import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

type Position = [number, number];

type Guard = {
  position: Position;
  directionIndex: number;
};

const DIRECTIONS: Position[] = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  const guard: Guard = {
    position: [-1, -1],
    directionIndex: 0,
  };

  const touchedPositions = new Set<string>();

  const lines: string[] = [];

  for await (const line of readLines(inputPath)) {
    const guardYPosition = line.indexOf("^");
    if (guardYPosition !== -1) {
      guard.position = [lines.length, guardYPosition];
      touchedPositions.add(guard.position.join(","));
    }
    lines.push(line);
  }

  return getTouchedPositionsCount(lines, guard, touchedPositions);
};

export function getNextDirectionIndex(currentDirectionIndex: number): number {
  return currentDirectionIndex + 1 === DIRECTIONS.length
    ? 0
    : currentDirectionIndex + 1;
}

function getTouchedPositionsCount(
  lines: string[],
  guard: Guard,
  touchedPositions: Set<string>
): number {
  let hasFinished = false;

  while (!hasFinished) {
    const [x, y] = guard.position;
    const [dx, dy] = DIRECTIONS[guard.directionIndex];
    const nextPosition: Position = [x + dx, y + dy];
    const [nx, ny] = nextPosition;
    if (nx < 0 || nx >= lines[0].length || ny < 0 || ny >= lines.length) {
      hasFinished = true;
      break;
    }
    const nextChar = lines[nx][ny];
    if (nextChar === "#") {
      const nextDirectionIndex = getNextDirectionIndex(guard.directionIndex);
      guard.directionIndex = nextDirectionIndex;
    } else {
      guard.position = nextPosition;
      touchedPositions.add(nextPosition.join(","));
    }
  }

  return touchedPositions.size;
}
