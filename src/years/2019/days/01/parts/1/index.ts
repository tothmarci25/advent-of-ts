import { join } from "path";
import readline from "readline";
import { createReadStream } from "fs";

export const calculateFuel = (mass: number): number => Math.floor(mass / 3) - 2;

export default (): Promise<number> => {
  const inputPath = join(__dirname, "../../input.txt");
  let result = 0;
  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: createReadStream(inputPath, { encoding: "utf8" }),
    });
    input.on("line", (line) => {
      const mass = parseInt(line);
      const fuel = calculateFuel(mass);
      result += fuel;
    });
    input.on("close", () => resolve(result));
  });
};
