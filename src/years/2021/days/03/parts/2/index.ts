import { join } from "path";
import { readLines } from "../../../../../../lib/readLines";

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  const sum = [0,0,0,0,0,0,0,0,0,0,0,0];
  const lines: number[][] = [];
  await readLines(inputPath, (line) => {
    lines.push(line.split('').map((char, i) => {
      const bit = parseInt(char);
      sum[i] += bit
      return bit;
    }));
  });
  const oxygenGeneratorBitCriteria: number[] = []
  const co2scrubberBitCriteria: number[] = [];
  sum.forEach((a) => {
    if (a >= 500) {
      oxygenGeneratorBitCriteria.push(1);
      co2scrubberBitCriteria.push(0)
    } else {
      oxygenGeneratorBitCriteria.push(0);
      co2scrubberBitCriteria.push(1);
    }
  });
  const res1 = r(lines, oxygenGeneratorBitCriteria);
  const res2 = r(lines, co2scrubberBitCriteria);
  console.log(res1, res2);
  return 0;
};

const r = (lines: number[][], criterias: number[]): number[] | undefined => {
  let remainingLines = lines;
  for (let i = 0; i < criterias.length; i++) {
    remainingLines = remainingLines.filter(line => line[i] === criterias[i]);
    if (remainingLines.length === 1) {
      return remainingLines[0];
    }
  }
  return;
}
