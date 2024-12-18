import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

type Position = [number, number];

type Guard = {
  position: Position;
  direction: Position;
};

const inputPath = join(__dirname, "../../input.txt");

export default async (): Promise<number> => {
  const guard: Guard = {
    position: [-1, -1],
    direction: [0, -1],
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
  while (true) {
    const [x, y] = guard.position;
    const [dx, dy] = guard.direction;
    const nextPosition: Position = [x + dx, y + dy];
    const [nx, ny] = nextPosition;
    if (nx < 0 || nx >= lines[0].length || ny < 0 || ny >= lines.length) {
      break;
    }
    const nextChar = lines[nx][ny];
    if (nextChar === "#") {
      const nextDirection = getNextDirection(guard.position);
      if (nextDirection) {
        guard.direction = nextDirection;
      }
    } else {
      guard.position = nextPosition;
      touchedPositions.add(nextPosition.join(","));
    }
  }
  return touchedPositions.size;
};

export function getNextDirection([x, y]: Position): Position | undefined {
  const directions: Position[] = [
    [0, -1], // up
    [1, 0], // right
    [0, 1], // down
    [-1, 0], // left
  ];
  return directions.find(([dx, dy]) => dx !== -x && dy !== -y);
}
