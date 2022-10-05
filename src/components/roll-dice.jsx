import React, { useState } from 'react';
import Dice from './dice';

const RollDice = ({ setSteps }) => {
  const [getResult, setResult] = useState([1, 1]);

  const result = () => {
    const randomNumber = () => Math.ceil(Math.random() * 6);

    const dice1 = randomNumber();
    const dice2 = randomNumber();

    setResult([dice1, dice2]);
    setSteps(dice1 + dice2);
  };

  return (
    <div className='roll-dice-block'>
      <div className='d-flex'>
        <Dice number={getResult[0]} />
        <Dice number={getResult[1]} />
      </div>
      <button onClick={result} className='button'>Roll dice</button>
    </div>
  )
}

export default RollDice;
