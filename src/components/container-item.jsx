import React from 'react';

const ContainerItem = ({ xy, avatarLocation, color }) => {

  const avatarLocationColor = xy === avatarLocation
    ? color
    : "";

  const isBorder = xy.includes('00') ? 'none' : '1px solid #535387';
  const writeNumber = !xy.includes('00') ? xy : '';

  return (
    <div
      className='container-item'
      style={{ backgroundColor: avatarLocationColor, border: isBorder }}
    >
      {writeNumber}
    </div>
  );
}

export default ContainerItem;
