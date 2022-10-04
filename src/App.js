import React, { useEffect, useState } from 'react';
import './styles.css'
import Container from './components/container';
import SideBar from './components/side-bar';

function App() {
  const items = [
    {
      xy: '1', color: '',
    }, {
      xy: '2', color: '',
    }, {
      xy: '3', color: '',
    }, {
      xy: '4', color: '',
    }, {
      xy: '5', color: '',
    }, {
      xy: '16', color: '',
    }, {
      xy: '001', color: '',
    }, {
      xy: '002', color: '',
    }, {
      xy: '003', color: '',
    }, {
      xy: '6', color: '',
    }, {
      xy: '15', color: '',
    }, {
      xy: '004', color: '',
    }, {
      xy: '005', color: '',
    }, {
      xy: '006', color: '',
    }, {
      xy: '7', color: '',
    }, {
      xy: '14', color: '',
    }, {
      xy: '007', color: '',
    }, {
      xy: '008', color: '',
    }, {
      xy: '009', color: '',
    }, {
      xy: '8', color: '',
    }, {
      xy: '13', color: '',
    }, {
      xy: '12', color: '',
    }, {
      xy: '11', color: '',
    }, {
      xy: '10', color: '',
    }, {
      xy: '9', color: '',
    },
  ];

  const [boxes, setBoxes] = useState([]);
  const [avatarLocation, setAvatarLocation] = useState('1');

  useEffect(() => {
    // let arr = [...items];
    let arr = items.map(item => item);
    setBoxes(arr)
  }, []);



  function avatarColor(pickedColor) {
    // const boxesUpdate = [...boxes];
    // const selected = boxesUpdate.find(x => x.xy === selectedBox);
    // selected.color = pickedColor;
    // setBoxes(boxesUpdate);
    console.log('pickedColor', pickedColor);
  }

  return (
    <>
      <h3>Like monopoly game</h3>
      <div className="main d-flex">
        <Container boxes={boxes} setAvatarLocation={setAvatarLocation} avatarLocation={avatarLocation} />
        <SideBar
          avatarColor={avatarColor}
        />
      </div>
    </>
  );
}

export default App;
