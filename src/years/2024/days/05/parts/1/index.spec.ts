import solve, { processUpdate, Rule } from ".";

describe("Year 2024 - Day 05 - Part 1", () => {
  describe("#processLine", () => {
    const rules: Rule[] = [
      [47, 53],
      [97, 13],
      [97, 61],
      [97, 47],
      [75, 29],
      [61, 13],
      [75, 53],
      [29, 13],
      [97, 29],
      [53, 29],
      [61, 53],
      [97, 53],
      [61, 29],
      [47, 13],
      [75, 47],
      [97, 75],
      [47, 61],
      [75, 61],
      [47, 29],
      [75, 13],
      [53, 13],
    ];

    [
      {
        update: [75, 47, 61, 53, 29],
        expected: 61,
      },
      {
        update: [97, 61, 53, 29, 13],
        expected: 53,
      },
      {
        update: [75, 29, 13],
        expected: 29,
      },
      {
        update: [75, 97, 47, 61, 53],
        expected: 0,
      },
      {
        update: [61, 13, 29],
        expected: 0,
      },
      {
        update: [97, 13, 75, 29, 47],
        expected: 0,
      },
    ].forEach((testCase) => {
      it("should calculate result array", () => {
        const result = processUpdate(testCase.update, rules);
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe("#default", () => {
    it("should return solution", async () => {
      expect(await solve()).toEqual(4814);
    });
  });
});
