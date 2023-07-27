/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from "react";

const Board = (props) => {
  const isActive = (id) => {
    if (!props.isActive) return false;
    if (props.G.cells[id] !== null) return false;
    return true;
  };

  const onClick = (id) => {
    if (isActive(id)) {
      props.moves.clickCell(id);
    }
  };

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td
          key={id}
          className={isActive(id) ? "active" : ""}
          onClick={() => onClick(id)}
        >
          {props.G.cells[id]}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  let winner = null;
  if (props.ctx.gameover) {
    winner =
      props.ctx.gameover.winner !== undefined ? (
        <div id="winner">Winner: {props.ctx.gameover.winner}</div>
      ) : (
        <div id="winner">Draw!</div>
      );
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
};

export default Board;
