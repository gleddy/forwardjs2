import React from "react";

import Row from "./row";
import Cell from "./cell";

class Game extends React.Component {
  render() {

    let grid = [], row;

    for(let r = 0; r < this.props.rows; r++) {
      row = [];
      for(let c = 0; c < this.props.cols; c++) {
        row.push(<Cell />);
      }
      grid.push(
        <Row>
          {row}
        </Row>
      );
    }

    return (
      <div>
        {grid}
       </div>
    );
  }
}

export default Game;
