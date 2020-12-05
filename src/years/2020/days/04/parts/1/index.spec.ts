import solve from ".";

describe("Year 2020 - Day 04 - Part 1", () => {
  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(256);
    });
  });
});
