import solve, { DIRECTION, getNextPosition, getNextDirection } from ".";

describe("Year 2024 - Day 06 - Part 1", () => {
  describe("#getNextPosition", () => {
    it("should return next position when given up", () => {
      const result = getNextPosition({
        position: [10, 10],
        direction: DIRECTION.UP,
      });
      expect(result).toEqual([10, 9]);
    });

    it("should return next position when given right", () => {
      const result = getNextPosition({
        position: [10, 10],
        direction: DIRECTION.RIGHT,
      });
      expect(result).toEqual([11, 10]);
    });

    it("should return next position when given down", () => {
      const result = getNextPosition({
        position: [10, 10],
        direction: DIRECTION.DOWN,
      });
      expect(result).toEqual([10, 11]);
    });

    it("should return next position when given left", () => {
      const result = getNextPosition({
        position: [10, 10],
        direction: DIRECTION.LEFT,
      });
      expect(result).toEqual([9, 10]);
    });
  });

  describe("#getNextDirection", () => {
    it("should return right direction when given up", () => {
      const result = getNextDirection(DIRECTION.UP);
      expect(result).toEqual(DIRECTION.RIGHT);
    });

    it("should return down direction when given right", () => {
      const result = getNextDirection(DIRECTION.RIGHT);
      expect(result).toEqual(DIRECTION.DOWN);
    });

    it("should return left direction when given down", () => {
      const result = getNextDirection(DIRECTION.DOWN);
      expect(result).toEqual(DIRECTION.LEFT);
    });

    it("should return up direction when given left", () => {
      const result = getNextDirection(DIRECTION.LEFT);
      expect(result).toEqual(DIRECTION.UP);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(4789);
    });
  });
});
