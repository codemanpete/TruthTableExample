import React from 'react';
import Statement from './engine/statement.js';




class Calculator extends React.Component {
  render() {
    let statement = new Statement('(P <-> Q) <-> ((P || R) -> (~Q -> R))');

    return (
      <div>
        {statement.table()}
      </div >
    );
  }
}

export default Calculator;