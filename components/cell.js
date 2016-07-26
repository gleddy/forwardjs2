import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);

    // this.guess = this.guess.bind(this);
  }

  isTarget() {
    const { targets, r, c } = this.props;
    return targets.filter(obj => {
      return obj.r === r && obj.c === c
    }).length === 1;
  }

  isSelected() {
    const { selected, r, c } = this.props;
    return selected.filter(obj => {
      return obj.r === r && obj.c === c
    }).length === 1;
  }

  guess = () => {
    if (this.isSelected()) {
      return;
    }
    this.props.selectCell(this.props.r, this.props.c)
  };

  cellClassName() {
    let className = "cell";
    const isTarget = this.isTarget(),
          isSelected = this.isSelected();

    if (isTarget) {
      if (this.props.gameState === 'challenge') {
        className += " target";
      }
      if (isSelected) {
        className += " guess-true";
      }
    } else {
      if (isSelected) {
        className += " guess-false";
      }
    }
    return className;
  }

  render() {
    return (
      <div className={this.cellClassName()}
           onClick={this.guess}>
      </div>
    );
  }

  static propTypes = {
    r: React.PropTypes.number,
    c: React.PropTypes.number,
    selectCell: React.PropTypes.func
  }
}

export default Cell;
