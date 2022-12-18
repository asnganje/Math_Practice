import React from 'react';
import '../style/keypad.css';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="keyboard-area">
        <button type="button" className="btn button0">0</button>
        <button type="button" className="btn button1">1</button>
        <button type="button" className="btn button2">2</button>
        <button type="button" className="btn button3">3</button>
        <button type="button" className="btn button4">4</button>
        <button type="button" className="btn button5">5</button>
        <button type="button" className="btn button6">6</button>
        <button type="button" className="btn button7">7</button>
        <button type="button" className="btn button8">8</button>
        <button type="button" className="btn button9">9</button>
        <button type="button" className="btn buttonPlus">+</button>
        <button type="button" className="btn buttonMinus">-</button>
        <button type="button" className="btn buttonMultiply">X</button>
        <button type="button" className="btn buttonDivide">/</button>
        <button type="button" className="btn buttonEquals">=</button>
        <button type="button" className="btn buttonPercent">%</button>
        <button type="button" className="btn buttonClear">AC</button>
        <button type="button" className="btn buttonplusminus">+/-</button>
        <button type="button" className="btn buttonDecimal">.</button>
      </div>
    );
  }
}

export default Keypad;
