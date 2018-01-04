import React from 'react';
import GameLogo from './GameLogo.js';
import GameRank from '../components/GameRank.js';
import GameButton from '../components/GameButton.js';

function GameHeader() {
  return (
    <div className="header">
      <GameLogo />
      <div className="header-column">
        <GameRank />
        <GameButton />
      </div>
      <div className="header-column">
        <GameRank />
        <GameButton />
      </div>
    </div>
  );
}

export default GameHeader;