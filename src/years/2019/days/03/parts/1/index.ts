import { readFileSync } from "fs";
import { join } from "path";

export type Coordinate = {
  posX: number;
  posY: number;
};

const ORIGO: Coordinate = { posX: 0, posY: 0 };

export const readLines = (filePath: string): string[][] => {
  const file = readFileSync(filePath, { encoding: "utf8" });
  const lines = file.split("\n").map((line) => line.split(","));
  return [lines[0], lines[1]];
};

export const getNextCoord = (
  currentCoord: Coordinate,
  direction: string
): Coordinate => {
  switch (direction) {
    case "U":
      return { posX: currentCoord.posX, posY: currentCoord.posY + 1 };

    case "D":
      return { posX: currentCoord.posX, posY: currentCoord.posY - 1 };

    case "L":
      return { posX: currentCoord.posX - 1, posY: currentCoord.posY };

    case "R":
      return { posX: currentCoord.posX + 1, posY: currentCoord.posY };

    default:
      return currentCoord;
  }
};

export const distance = (a: Coordinate, b: Coordinate): number => {
  return Math.abs(a.posX - b.posX) + Math.abs(a.posY - b.posY);
};

export const processLines = (lines: string[][]): number => {
  const distances: number[] = [];
  const coords = new Map<string, number>();

  let currentCoord = ORIGO;
  lines[0].forEach((instruction: string) => {
    const direction = instruction[0];
    const stepCount = parseInt(instruction.slice(1));
    for (let step = 0; step < stepCount; step++) {
      const newCoord = getNextCoord(currentCoord, direction);
      coords.set(`${newCoord.posX}-${newCoord.posY}`, 1);
      currentCoord = newCoord;
    }
  });

  currentCoord = ORIGO;
  lines[1].forEach((instruction: string) => {
    const direction = instruction[0];
    const stepCount = parseInt(instruction.slice(1));
    for (let step = 0; step < stepCount; step++) {
      const newCoord = getNextCoord(currentCoord, direction);
      if (coords.has(`${newCoord.posX}-${newCoord.posY}`)) {
        distances.push(distance(ORIGO, newCoord));
      }
      currentCoord = newCoord;
    }
  });

  return Math.min(...distances);
};

export default async (): Promise<number> => {
  const lines = readLines(join(__dirname, "../../input.txt"));
  return processLines(lines);
};
