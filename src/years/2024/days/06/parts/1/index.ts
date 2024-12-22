import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

type Position = [number, number];
type Direction = [0, -1] | [1, 0] | [0, 1] | [-1, 0];
type Guard = {
  position: Position;
  direction: Direction;
};

export const DIRECTION: { [key: string]: Direction } = {
  UP: [0, -1],
  RIGHT: [1, 0],
  DOWN: [0, 1],
  LEFT: [-1, 0],
};

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  const guard: Guard = {
    position: [-1, -1],
    direction: DIRECTION.UP,
  };
  const visitedPositions = new Set<string>();
  const lines: string[] = [];
  for await (const line of readLines(inputPath)) {
    const guardXPosition = line.indexOf("^");
    if (guardXPosition !== -1) {
      guard.position = [guardXPosition, lines.length];
      visitedPositions.add(guard.position.join(","));
    }
    lines.push(line);
  }
  return processLines(lines, guard, visitedPositions);
};

export function processLines(
  lines: string[],
  guard: Guard,
  visitedPositions: Set<string>
): number {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const nextPosition = getNextPosition(guard);
    const [nx, ny] = nextPosition;
    if (nx < 0 || nx >= lines[0].length || ny < 0 || ny >= lines.length) {
      break;
    }
    const nextChar = lines[ny][nx];
    if (nextChar === "#") {
      guard.direction = getNextDirection(guard.direction);
    } else {
      guard.position = nextPosition;
      visitedPositions.add(nextPosition.join(","));
    }
  }
  return visitedPositions.size;
}

export function getNextPosition(guard: Guard): Position {
  const [x, y] = guard.position;
  const [dx, dy] = guard.direction;
  return [x + dx, y + dy];
}

export function getNextDirection(direction: Direction): Direction {
  if (direction === DIRECTION.UP) {
    return DIRECTION.RIGHT;
  }
  if (direction === DIRECTION.RIGHT) {
    return DIRECTION.DOWN;
  }
  if (direction === DIRECTION.DOWN) {
    return DIRECTION.LEFT;
  }
  return DIRECTION.UP;
}
