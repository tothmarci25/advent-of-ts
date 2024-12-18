import solve, { getNextDirection } from ".";

describe("Year 2024 - Day 06 - Part 1", () => {
  describe("#getNextDirection", () => {
    it("should calculate result", () => {
      const result = getNextDirection();
      expect(result).toEqual(testCase.expected);
    });

    it("should calculate result", () => {
      const result = getNextDirection();
      expect(result).toEqual(testCase.expected);
    });

    it("should calculate result", () => {
      const result = getNextDirection();
      expect(result).toEqual(testCase.expected);
    });

    it("should calculate result", () => {
      const result = getNextDirection();
      expect(result).toEqual(testCase.expected);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(4814);
    });
  });
});
