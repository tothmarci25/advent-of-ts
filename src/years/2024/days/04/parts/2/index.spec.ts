import solve, { processLines } from ".";

describe("Year 2024 - Day 04 - Part 2", () => {
  describe("#processLines", () => {
    it("should calculate result", () => {
      const lines = [
        ".M.S......",
        "..A..MSMS.",
        ".M.S.MAA..",
        "..A.ASMSM.",
        ".M.S.M....",
        "..........",
        "S.S.S.S.S.",
        ".A.A.A.A..",
        "M.M.M.M.M.",
        "..........",
      ];
      const result = processLines(lines);
      expect(result).toEqual(9);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(1912);
    });
  });
});
