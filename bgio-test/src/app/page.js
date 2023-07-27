import React from "react";
import dynamic from "next/dynamic";
const Client = dynamic(() => import("../tictactoe/TicTacToeClient"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import "../tictactoe/board.css";

export default function Page() {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Client />
    </div>
  );
}
