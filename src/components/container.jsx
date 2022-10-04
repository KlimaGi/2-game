import React from 'react';
import ContainerItem from './container-item';
import RollDice from './roll-dice';

const Container = ({ boxes, setSelectedBox, avatarLocation, setSteps }) => {


  return (
    <div className='main-block'>
      <div className='inside-block'>
        <RollDice setSteps={setSteps} />
      </div>
      <div className='container'>
        {boxes.map(box => (
          <ContainerItem
            key={box.xy}
            item={box}
            xy={box.xy}
            setSelectedBox={setSelectedBox}
            avatarLocation={avatarLocation} />))
        }
      </div>
    </div>

  )
}

export default Container;
