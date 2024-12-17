import solve, { processLine } from ".";

describe("Year 2024 - Day 03 - Part 2", () => {
  describe("#processLine", () => {
    [
      {
        input: `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
        expected: 48,
      },
    ].forEach((testCase) => {
      it("should calculate result array", () => {
        const result = processLine(testCase.input);
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(79967531);
    });
  });
});
