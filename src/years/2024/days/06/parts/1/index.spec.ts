import solve from ".";

describe("Year 2024 - Day 06 - Part 1", () => {
  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(4789);
    });
  });
});
