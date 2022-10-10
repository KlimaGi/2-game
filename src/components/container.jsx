import React, { useContext } from 'react';
import MainContext from '../context/main-context';
import ContainerItem from './container-item';
import RollDice from './roll-dice';

const Container = () => {

  const { gameMap } = useContext(MainContext);

  return (
    <div className='main-block'>
      <div className='inside-block'>
        <RollDice />
      </div>
      <div className='container'>
        {gameMap.map(box => (
          <ContainerItem
            key={box.xy}
            box={box}
          />))
        }
      </div>
    </div>

  )
}

export default Container;
