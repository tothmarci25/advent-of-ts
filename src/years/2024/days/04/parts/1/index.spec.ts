import solve, { processLines } from ".";

describe("Year 2024 - Day 04 - Part 1", () => {
  describe("#processLines", () => {
    it("should calculate result", () => {
      const lines = [
        "MMMSXXMASM",
        "MSAMXMSMSA",
        "AMXSXMAAMM",
        "MSAMASMSMX",
        "XMASAMXAMM",
        "XXAMMXXAMA",
        "SMSMSASXSS",
        "SAXAMASAAA",
        "MAMMMXMMMM",
        "MXMXAXMASX",
      ];
      const result = processLines(lines);
      expect(result).toEqual(18);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(2521);
    });
  });
});
