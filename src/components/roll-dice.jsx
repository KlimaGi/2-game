import React, { useState } from 'react';

const RollDice = ({ setSteps }) => {
  const [getResult, setResult] = useState([0, 0]);

  const result = () => {
    const randomNumber = (max, min) => {
      const result = Math.floor(Math.random() * (max - min + 1) + min);
      return result;
    };

    const dice1 = randomNumber(6, 1);
    const dice2 = randomNumber(6, 1);

    setResult([dice1, dice2]);
    setSteps(dice1 + dice2);
  };


  // todo: make dice look good
  return (
    <div className='roll-dice-block'>
      <div className='d-flex'>
        <div>{getResult[0]}</div>
        <div>{getResult[1]}</div>
      </div>
      <button onClick={result} className='button'>Roll dice</button>
    </div>
  )
}

export default RollDice;
