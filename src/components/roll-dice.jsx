import React, { useEffect, useState, useContext } from 'react';
import MainContext from '../context/main-context';
import Dice from './dice';

const RollDice = () => {
  const { setAvatarLocation, avatarLocation } = useContext(MainContext);
  const [getResult, setResult] = useState([1, 1]);
  const [steps, setSteps] = useState(0);

  const updateAvatarLocation = () => {
    let number = Number(avatarLocation) + steps;
    if (number > 16) number -= 16;
    const strNum = number.toString();
    setAvatarLocation(strNum);
  };

  useEffect(() => {
    updateAvatarLocation();
  }, [steps]);

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
