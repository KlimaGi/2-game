import React from 'react';
import ContainerItem from './container-item';
import RollDice from './roll-dice';

const Container = ({ boxes, avatarLocation, setSteps, color }) => {

  return (
    <div className='main-block'>
      <div className='inside-block'>
        <RollDice setSteps={setSteps} />
      </div>
      <div className='container'>
        {boxes.map(box => (
          <ContainerItem
            key={box.xy}
            xy={box.xy}
            avatarLocation={avatarLocation}
            color={color}
          />))
        }
      </div>
    </div>

  )
}

export default Container;
