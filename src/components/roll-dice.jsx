import React, { useState } from 'react';
import Dice from './dice';
import point1 from '../assets/point-1.svg';

const RollDice = ({ setSteps }) => {
  const [getResult, setResult] = useState([0, 0]);

  const result = () => {
    const randomNumber = (max, min) => {
      const result = Math.floor(Math.random() * (max - min) + 1);
      return result;
    };

    const dice1 = randomNumber(7, 1);
    const dice2 = randomNumber(7, 1);

    setResult([dice1, dice2]);
    setSteps(dice1 + dice2);
  };

  // todo: make dice look good
  return (
    <div className='roll-dice-block'>
      <div className='d-flex'>
        <div>{getResult[0]}</div>
        <Dice number={getResult[0]} />
        <img width={50} src={point1} alt='dice points'></img>
        <div>{getResult[1]}</div>
      </div>
      <button onClick={result} className='button'>Roll dice</button>
    </div>
  )
}

export default RollDice;
