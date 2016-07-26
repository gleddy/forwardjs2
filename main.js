import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameId: 1 };
  }

  resetGame = () => {
    this.setState({gameId: this.state.gameId + 1});
  }

  render() {
    return (
      <div>
        <Game key={this.state.gameId} rows={5} cols={5}
              messages={this.props.messages}
              resetGame={this.resetGame} />
       </div>
    );
  }

  static defaultProps = {
    messages: {
      challenge: "Remember now..",
      recall: "Recall now, por favor"
    }
  }
}

ReactDOM.render(
  <App />
  ,
  document.getElementById("react")
);
