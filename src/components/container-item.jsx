import React from 'react';

const ContainerItem = ({ item, xy, avatarLocation }) => {

  const selectedItem = xy === avatarLocation
    ? "container-item selected"
    : "container-item";

  const isBorder = xy.includes('00') ? 'none' : '1px solid #535387';
  const writeNumber = !xy.includes('00') ? xy : '';

  return (
    <div
      className={selectedItem}
      // onClick={() => setAvatarLocation(xy)}

      style={{ backgroundColor: item.color, border: isBorder }}
    >
      {writeNumber}
    </div>
  );
}

export default ContainerItem;
