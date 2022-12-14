import React, { useEffect, useState } from 'react';
import point1 from '../assets/point-1.svg';
import point2 from '../assets/point-2.svg';
import point3 from '../assets/point-3.svg';
import point4 from '../assets/point-4.svg';
import point5 from '../assets/point-5.svg';
import point6 from '../assets/point-6.svg';

const Dice = ({ number = 1 }) => {
  const [dice, setDice] = useState(point1);
  const dices = [point1, point2, point3, point4, point5, point6];
  const dicePoint = dices[number - 1];

  useEffect(() => {
    setDice(dicePoint);
  }, [number]);

  console.log('number', number);
  return (
    <img width={50} src={dice} alt='dice points'></img>
  )
}

export default Dice;
