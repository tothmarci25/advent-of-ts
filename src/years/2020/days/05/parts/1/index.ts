import { join } from "path";
import { splitAt } from "ramda";
import { readLines } from "../../../../../../lib/readLines";

export type Partition = [number, number];

export const nextPartition = (
  partition: Partition,
  char: string
): Partition => {
  const distance = partition[1] - partition[0];
  const halfDistance = Math.round(distance / 2);
  if (char === "F" || char === "L") {
    return [partition[0], partition[1] - halfDistance];
  }
  return [partition[0] + halfDistance, partition[1]];
};

export const getSeatId = (row: number, column: number): number =>
  row * 8 + column;

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  await readLines(inputPath, (line) => {
    const [rows, columns] = splitAt(7, line);
    const rowPartition = [...rows].reduce(nextPartition, [0, 127]);
    const columnPartition = [...columns].reduce(nextPartition, [0, 7]);
    const seatId = getSeatId(rowPartition[0], columnPartition[0]);
    if (seatId > result) {
      result = seatId;
    }
  });
  return result;
};
