import solve, { processInput } from ".";

describe("Year 2020 - Day 01 - Part 2", () => {
  describe("#processInput", () => {
    it("should return solution", () => {
      const input = [1721, 979, 366, 299, 675, 1456];
      expect(processInput(input)).toEqual(241861950);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(128397680);
    });
  });
});
