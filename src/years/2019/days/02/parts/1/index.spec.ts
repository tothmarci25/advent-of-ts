import solve, { processInput } from ".";

describe("Year 2019 - Day 02 - Part 1", () => {
  describe("#processInput", () => {
    [
      {
        input: [99],
        expected: [99],
      },
      {
        input: [1, 0, 0, 0, 99],
        expected: [2, 0, 0, 0, 99],
      },
      {
        input: [2, 3, 0, 3, 99],
        expected: [2, 3, 0, 6, 99],
      },
      {
        input: [2, 4, 4, 5, 99, 0],
        expected: [2, 4, 4, 5, 99, 9801],
      },
      {
        input: [1, 1, 1, 4, 99, 5, 6, 0, 99],
        expected: [30, 1, 1, 4, 2, 5, 6, 0, 99],
      },
    ].forEach((testCase) => {
      it("should calculate result array", () => {
        processInput(testCase.input);
        expect(testCase.input).toEqual(testCase.expected);
      });
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(4484226);
    });
  });
});
