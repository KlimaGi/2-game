import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import IndexPage from './pages/index-page';
import GamePage from './pages/game-page';
import MainContext from './context/main-context';
import Container from './components/container';
import SideBar from './components/side-bar';

function App() {
  const gameMap = [
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
  const [steps, setSteps] = useState(0);
  const [color, setColor] = useState('#ffffff');
  const [playerImage, setPlayerImage] = useState('');

  const changeLocation = () => {
    let number = Number(avatarLocation) + steps;
    if (number > 16) {
      number -= 16;
    };
    const strNum = number.toString();
    setAvatarLocation(strNum);
    console.log('avatarLocation', avatarLocation);
    console.log('steps', steps);
  }

  useEffect(() => {
    changeLocation();
  }, [steps]);

  useEffect(() => {
    let arr = gameMap.map(item => item);
    setBoxes(arr)
  }, []);

  function avatarColor(pickedColor) {
    const boxesUpdate = [...boxes];
    const locate = boxesUpdate.find(x => x.xy === avatarLocation);
    locate.color = pickedColor;
    setColor(pickedColor);
    setBoxes(boxesUpdate);
  }

  const contextValue = {
    gameMap,
    avatarLocation,
    setAvatarLocation,
    playerImage,
    setPlayerImage
  }

  return (
    <MainContext.Provider value={contextValue}>
      <h3>Like monopoly game</h3>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<IndexPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>

        <div className="main d-flex">
          <Container
            boxes={boxes}
            setAvatarLocation={setAvatarLocation}
            avatarLocation={avatarLocation}
            setSteps={setSteps}
            color={color}
          />
          <SideBar
            avatarColor={avatarColor}
          />
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
