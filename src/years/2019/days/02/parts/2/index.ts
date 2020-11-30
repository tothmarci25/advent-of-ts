import { join } from "path";
import { processInput, readInput } from "../1";

export default async (): Promise<number | void> => {
  const inputPath = join(__dirname, "../../input.txt");
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const input = readInput(inputPath);
      input[1] = noun;
      input[2] = verb;
      processInput(input);
      if (input[0] === 19690720) {
        const result = 100 * noun + verb;
        return result;
      }
    }
  }
};
