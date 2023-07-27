import React from "react";
import Client from "../../tictactoe/TicTacToeClient";
import "../../tictactoe/board.css";
export default function Page() {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Client />
    </div>
  );
}
