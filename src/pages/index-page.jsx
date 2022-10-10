import React, { useContext, useRef } from 'react';
import MainContext from '../context/main-context';
import { useNavigate } from 'react-router-dom';


const IndexPage = () => {
  const nav = useNavigate();
  const inpRef = useRef();
  const { setPlayerImage } = useContext(MainContext);

  function updatePhoto() {
    const photoValue = inpRef.current.value;
    if (photoValue.length > 0 && photoValue.includes('http')) {
      setPlayerImage(photoValue);
      nav('/game');
    }
  }

  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='player image'
        className='input'
        ref={inpRef} />
      <button
        className='button'
        onClick={updatePhoto}
      >Add Image
      </button>
    </div>
  )
}

export default IndexPage;
