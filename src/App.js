import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import IndexPage from './pages/index-page';
import GamePage from './pages/game-page';
import MainContext from './context/main-context';

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

  const [avatarLocation, setAvatarLocation] = useState('1');
  const [playerImage, setPlayerImage] = useState('');

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

      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
