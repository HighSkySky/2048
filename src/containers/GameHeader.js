import React from 'react';
import GameLogo from './GameLogo.js';
import GameRank from '../components/GameRank.js';
import GameButton from '../components/GameButton.js';

function GameHeader() {
  return (
    <div className="header">
      <GameLogo />
      <div className="header-column">
        <GameRank title="分数" value="16"/>
        <GameButton />
      </div>
      <div className="header-column">
        <GameRank title="历史最高成绩" value="16" />
        <GameButton />
      </div>
    </div>
  );
}

export default GameHeader;