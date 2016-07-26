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
    this.props.selectCell(this.props.r, this.props.c)
    const isCorrectGuess = this.isTarget();
  };

  cellClassName() {
    return `cell ${this.isTarget() ? 'target' : ''}`;
  }

  render() {
    return (
      <div className={this.cellClassName()}>
           onClick={this.guess}>
           {this.isSelected() ? '1': '0'}
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
