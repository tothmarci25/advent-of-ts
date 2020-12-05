import solve, { nextPartition } from ".";

describe("Year 2020 - Day 05 - Part 1", () => {
  describe("#nextPartition", () => {
    it("should return front", async () => {
      expect(nextPartition([0, 127], "F")).toEqual([0, 63]);
    });

    it("should return front", async () => {
      expect(nextPartition([44, 45], "F")).toEqual([44, 44]);
    });

    it("should return back", async () => {
      expect(nextPartition([0, 63], "B")).toEqual([32, 63]);
    });

    it("should return back", async () => {
      expect(nextPartition([44, 45], "B")).toEqual([45, 45]);
    });

    it("should return right", async () => {
      expect(nextPartition([0, 7], "R")).toEqual([4, 7]);
    });

    it("should return right", async () => {
      expect(nextPartition([4, 5], "R")).toEqual([5, 5]);
    });

    it("should return left", async () => {
      expect(nextPartition([4, 7], "L")).toEqual([4, 5]);
    });

    it("should return left", async () => {
      expect(nextPartition([4, 5], "L")).toEqual([4, 4]);
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(871);
    });
  });
});
