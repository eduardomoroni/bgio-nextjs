import { Client } from "boardgame.io/client";
import TicTacToe, { clickCell } from "./game";

it("should declare player 1 as the winner", () => {
  // set up a specific board scenario
  const TicTacToeCustomScenario = {
    ...TicTacToe,
    setup: () => ({
      cells: ["0", "0", null, "1", "1", null, null, null, null],
    }),
  };

  // initialize the client with your custom scenario
  const client = Client({
    game: TicTacToeCustomScenario,
  });

  // make some game moves
  client.moves.clickCell(8);
  client.moves.clickCell(5);

  // get the latest game state
  const { G, ctx } = client.getState();

  // the board should look like this now
  expect(G.cells).toEqual(["0", "0", null, "1", "1", "1", null, null, "0"]);
  // player '1' should be declared the winner
  expect(ctx.gameover).toEqual({ winner: "1" });
});

it("should place the correct value in the cell", () => {
  // original state.
  const G = {
    cells: [null, null, null, null, null, null, null, null, null],
  };

  // make move.
  clickCell({ G, playerID: "1" }, 3);

  // verify new state.
  expect(G).toEqual({
    cells: [null, null, null, "1", null, null, null, null, null],
  });
});
