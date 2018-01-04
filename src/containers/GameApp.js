import React from 'react';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import GameRole from '../components/GameRole';

function GameApp() {
  return (
    <div className="wrapper">
      <GameHeader />
      <GameRole />
      <GameBody />
    </div>
  );
}

export default GameApp;