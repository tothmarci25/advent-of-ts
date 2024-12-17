import { join } from "path";
import { readLines } from "../../../../../../lib/readLines-promise";

export type Rule = [number, number];

const rulesInputPath = join(__dirname, "../../rules-input.txt");
const updatesInputPath = join(__dirname, "../../updates-input.txt");

export default async (): Promise<number> => {
  const rules: Rule[] = [];
  for await (const line of readLines(rulesInputPath)) {
    const [a, b] = line.split("|");
    rules.push([parseInt(a), parseInt(b)]);
  }
  let result = 0;
  for await (const line of readLines(updatesInputPath)) {
    const update = line.split(",").map((x) => parseInt(x));
    result += processUpdate(update, rules);
  }
  return result;
};

export function processUpdate(line: number[], rules: Rule[]): number {
  for (const [a, b] of rules) {
    const indexOfA = line.indexOf(a);
    const indexOfB = line.indexOf(b);
    if (indexOfA !== -1 && indexOfB !== -1 && indexOfA > indexOfB) {
      return 0;
    }
  }
  return line[(line.length - 1) / 2];
}
