import { join } from "path";
import { aperture, find, pipe, sort, splitAt } from "ramda";
import { readLines } from "../../../../../../lib/readLines";
import { getSeatId, nextPartition } from "../1";

export const getMissingSeatId = (seatIds: number[]): number => {
  const pair = pipe(
    sort<number>((a, b) => a - b),
    aperture(2),
    find((pair) => pair[1] - pair[0] !== 1)
  )(seatIds);

  if (pair) {
    return pair[0] + 1;
  } else {
    return 0;
  }
};

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  const seatIds: number[] = [];
  await readLines(inputPath, (line) => {
    const [rows, columns] = splitAt(7, line);
    const rowPartition = [...rows].reduce(nextPartition, [0, 127]);
    const columnPartition = [...columns].reduce(nextPartition, [0, 7]);
    const seatId = getSeatId(rowPartition[0], columnPartition[0]);
    seatIds.push(seatId);
  });
  return getMissingSeatId(seatIds);
};
