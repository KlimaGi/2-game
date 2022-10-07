import React, { useContext, useRef } from 'react';
import MainContext from '../context/main-context';


const IndexPage = () => {
  const inpRef = useRef();
  const { setPlayerImage } = useContext(MainContext);

  function updatePhoto() {
    const photoValue = inpRef.current.value;
    if (photoValue.length > 0 && photoValue.includes('http')) {
      setPlayerImage(photoValue);
    }
  }

  return (
    <div>
      <input
        type='text'
        placeholder='player image'
        className='input'
        ref={inpRef} />
      <button
        className='button'
      >Add Image
      </button>
    </div>
  )
}

export default IndexPage;
