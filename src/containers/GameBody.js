import React from 'react';
import GameBox from './GameBox'

function makeBoxLists() {
  let boxLists = [];
  for (let i = 0; i < 16; i ++) {
    boxLists.push(<GameBox key={i} value="2" />)
  }
  return boxLists;
}

function GameBody() {
  return (
    <div className="body">
      { makeBoxLists.call(this) }
    </div>
  );
}

export default GameBody;