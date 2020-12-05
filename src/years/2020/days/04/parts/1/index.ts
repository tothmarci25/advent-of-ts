import { join } from "path";
import { allPass, has, isEmpty } from "ramda";
import { readLines } from "../../../../../../lib/readLines";

export const isValid = allPass([
  has("byr"),
  has("iyr"),
  has("eyr"),
  has("hgt"),
  has("hcl"),
  has("ecl"),
  has("pid"),
]);

export default async (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  let passport: { [key: string]: string } = {};
  await readLines(inputPath, (line) => {
    if (isEmpty(line)) {
      if (isValid(passport)) {
        result += 1;
      }
      passport = {};
      return;
    }
    line.split(" ").forEach((field) => {
      const [key, value] = field.split(":");
      passport[key] = value;
    });
  });
  return result;
};
