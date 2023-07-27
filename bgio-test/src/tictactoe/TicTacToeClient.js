"use client";

import { Client } from "boardgame.io/react";
import TicTacToe from "./game";
import Board from "./board";

export default Client({
  game: TicTacToe,
  board: Board,
});
