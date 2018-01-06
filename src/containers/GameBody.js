import React, { Component } from 'react';
import GameBox from './GameBox';
import { touchStart, touchEnd } from '../utils/touch.js';
import initSite from '../utils/initSite.js'

class GameBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: new Array(16).fill('')
    }
  }

  _changeLists({ value, index }) {
    const newLists = this.state.lists.slice(0);
    newLists[index] = value;
    this.setState({
      lists: newLists
    });
  }

  handleTouchEnd = (ev) => {
    const target = touchEnd(ev);
    if (target) {
      const newSite = initSite(this.state.lists);
      this._changeLists(newSite);
    }
  }

  render() {
    return (
      <div className="body"
        onTouchStart={touchStart}
        onTouchEnd={this.handleTouchEnd}>
        { this.state.lists.map((value, index) => <GameBox key={index} value={String(value)} />) }
      </div>
    );
  }
}

export default GameBody;