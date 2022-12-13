import React from 'react';
import '../style/calculator.css';
import Keypad from './Keypad';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="myCalc">
        <p className="displayCalc">0</p>
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
