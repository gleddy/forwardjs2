import React from "react";

import Row from "./row";
import Cell from "./cell";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: this.pickRandomTargets(),
      selected: [],
      gameState: 'challenge' // 'challenge', 'recall', 'won', 'lost'
    };
  }

  pickRandomTargets() {
    return [
      { r: 0, c: 2 },
      { r: 4, c: 4 },
      { r: 3, c: 0 }
    ];
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({gameState: 'recall'})
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  selectCell = (r, c) => {
    this.setState({ selected: this.state.selected.concat({ r, c }) });
  };

  render() {
    let grid = [], row;

    for(let r = 0; r < this.props.rows; r++) {
      row = [];
      for(let c = 0; c < this.props.cols; c++) {
        const cellId = `r${r}-c${c}`;
        row.push(<Cell key={cellId}
          r={r} c={c}
          selectCell={this.selectCell}
          gameState={this.state.gameState}
          selected={this.state.selected}
          targets={this.state.targets} />);
      }
      grid.push(
        <Row key={r}>
          {row}
        </Row>
      );
    }

    return (
      <div>
        {grid}
        <button>Play Again</button>
       </div>
    );
  }
}

export default Game;
