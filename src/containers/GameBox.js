import React from 'react';
import GameBaseBox from '../components/GameBaseBox.js'

function GameBox(props) {
  return (
    <div className="box">
      <GameBaseBox {...props} />
    </div>
  );
}

export default GameBox;