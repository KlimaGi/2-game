import React, { useContext } from 'react';
import MainContext from '../context/main-context';

const ContainerItem = ({ box }) => {

  const { avatarLocation, playerImage } = useContext(MainContext);

  const avatarLocationColor = box.xy === avatarLocation
    ? "#a5a5c0"
    : "";

  const isBorder = box.xy.includes('00') ? 'none' : '1px solid #535387';

  return (

    <div
      className='container-item'
      style={{ backgroundColor: avatarLocationColor, border: isBorder }}
    >
      {
        avatarLocation === box.xy && playerImage.length > 0 && <img className='player-image' src={playerImage} alt='player' />
      }
    </div>

  );
}

export default ContainerItem;
