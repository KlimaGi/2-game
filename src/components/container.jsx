import React from 'react';
import ContainerItem from './container-item';
import RollDice from './roll-dice';

const Container = ({ boxes, setSelectedBox, avatarLocation }) => {


  return (
    <div>
      <div>
        <RollDice />
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
