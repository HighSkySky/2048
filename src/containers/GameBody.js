import React from 'react';
import GameBox from './GameBox'
import { touchStart, touchEnd } from '../utils/touch.js'

function makeBoxLists() {
  let boxLists = [];
  for (let i = 0; i < 16; i ++) {
    boxLists.push(<GameBox key={i} />)
  }
  return boxLists;
}

function GameBody() {
  return (
    <div className="body"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}>
      { makeBoxLists.call(this) }
    </div>
  );
}

export default GameBody;