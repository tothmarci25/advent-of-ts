import { join } from "path";
import readline from "readline";
import { createReadStream } from "fs";
import { calculateFuel } from "../1";

const calculateTotalFuel = (mass: number): number => {
  const fuel = calculateFuel(mass);
  if (fuel > 0) {
    return fuel + calculateTotalFuel(fuel);
  }
  return 0;
};

export default (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: createReadStream(inputPath, { encoding: "utf8" }),
    });
    input.on("line", (line) => {
      const mass = parseInt(line);
      const fuel = calculateTotalFuel(mass);
      result += fuel;
    });
    input.on("close", () => resolve(result));
  });
};
