import React from 'react';
import '../style/calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnValue = btn.target.textContent;
    this.setState((e) => calculate(e, btnValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="myCalc">
        <div className="displayCalc">
          {total }
          {operation}
          {next}
        </div>
        <div className="keyboard-area">
          <button
            type="button"
            className="btn button0"
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            type="button"
            className="btn button1"
            onClick={this.handleClick}
          >
            1
          </button>
          <button
            type="button"
            className="btn button2"
            onClick={this.handleClick}
          >
            2
          </button>
          <button
            type="button"
            className="btn button3"
            onClick={this.handleClick}
          >
            3
          </button>
          <button
            type="button"
            className="btn button4"
            onClick={this.handleClick}
          >
            4
          </button>
          <button
            type="button"
            className="btn button5"
            onClick={this.handleClick}
          >
            5
          </button>
          <button
            type="button"
            className="btn button6"
            onClick={this.handleClick}
          >
            6
          </button>
          <button
            type="button"
            className="btn button7"
            onClick={this.handleClick}
          >
            7
          </button>
          <button
            type="button"
            className="btn button8"
            onClick={this.handleClick}
          >
            8
          </button>
          <button
            type="button"
            className="btn button9"
            onClick={this.handleClick}
          >
            9
          </button>
          <button
            type="button"
            className="btn buttonPlus"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="btn buttonMinus"
            onClick={this.handleClick}
          >
            -
          </button>
          <button
            type="button"
            className="btn buttonMultiply"
            onClick={this.handleClick}
          >
            X
          </button>
          <button
            type="button"
            className="btn buttonDivide"
            onClick={this.handleClick}
          >
            /
          </button>
          <button
            type="button"
            className="btn buttonEquals"
            onClick={this.handleClick}
          >
            =
          </button>
          <button
            type="button"
            className="btn buttonPercent"
            onClick={this.handleClick}
          >
            %
          </button>
          <button
            type="button"
            className="btn buttonClear"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            type="button"
            className="btn buttonplusminus"
            onClick={this.handleClick}
          >
            +/-
          </button>
          <button
            type="button"
            className="btn buttonDecimal"
            onClick={this.handleClick}
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
