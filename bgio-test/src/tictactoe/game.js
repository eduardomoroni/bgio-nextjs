"use client";

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function IsVictory(cells) {
  // Cells are undefined for some reason
  if (!cells) return false;

  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

const TicTacToe = {
  name: "tic-tac-toe",

  setup: () => {
    const cells = Array(9).fill(null);

    return {
      cells: cells,
      test: "string",
    };
  },

  moves: {
    clickCell(G, ctx, id) {
      console.log("clickCell");
      console.log(G.cells);
      console.log(G.test);
      console.log(ctx);
      console.log(id);
      debugger;
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer;
      }
    },
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }

    // Cells are undefined for some reason
    if (G?.cells?.filter((c) => c === null).length === 0) {
      return { draw: true };
    }
  },

  ai: {
    enumerate: (G) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    },
  },
};

export function clickCell({ G, playerID }, id) {
  G.cells[id] = playerID;
}

export default TicTacToe;
