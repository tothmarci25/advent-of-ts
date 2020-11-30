import { buildCoords } from "./index";

export const print = (lines: string[][]): void => {
  const display: string[][] = [];
  const displaySize = 50;
  const origo = { posX: 10, posY: 10 };

  for (let i = 0; i <= displaySize; i++) {
    display[i] = [];
    for (let j = 0; j <= displaySize; j++) {
      display[i][j] = ".";
    }
  }

  display[origo.posX][origo.posY] = "O";

  const lineA = buildCoords(lines[0], origo);
  console.log("Line A", lineA);
  lineA.forEach((coord) => {
    display[coord.posX][coord.posY] = "A";
  });

  const lineB = buildCoords(lines[1], origo);
  console.log("Line B", lineB);
  lineB.forEach((coord) => {
    display[coord.posX][coord.posY] = "B";
  });

  for (let i = displaySize; i >= 0; i--) {
    let row = "";
    for (let j = 0; j <= displaySize; j++) {
      row += display[j][i];
    }
    console.log(row);
  }
};
