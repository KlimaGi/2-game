import React, { useRef } from 'react'

const SideBar = ({ avatarColor }) => {
  const colorRef = useRef();

  return (
    <div className='side-bar'>
      <div>
        <h3>Your Avatar color</h3>
        <input
          ref={colorRef}
          type='color'
          className='container-item'
        />
      </div>
      <div>
        <button className='button' onClick={() => avatarColor(colorRef.current.value)}>Start game</button>
      </div>
    </div>
  )
}

export default SideBar
