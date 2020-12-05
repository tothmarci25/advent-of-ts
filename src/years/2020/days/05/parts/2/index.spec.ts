import solve from ".";

describe("Year 2020 - Day 05 - Part 2", () => {
  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(640);
    });
  });
});
