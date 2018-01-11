import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameBox from './GameBox';
import { touchStart, touchEnd } from '../utils/touch.js';
import initSite from '../utils/initSite.js';
import moveSite from '../utils/moveSite.js';
import { changeList } from '../reducers/gameApp.js';

class GameBody extends Component {
  _changeList(newList, { value, index }) {
    newList[index] = value;
    this.props.onChange(newList);
  }

  handleTouchStart = (ev) => {
    touchStart(ev);
  }

  handleTouchEnd = (ev) => {
    const target = touchEnd(ev);
    if (target) {
      const newList = moveSite(target, this.props.list);
      const newSite = initSite(newList);
      this._changeList(newList, newSite);
    }
  }

  render() {
    return (
      <div className="body"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        { 
          this.props.list.map((value, index) => 
          <GameBox key={index} value={value} />) 
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    gameLists: state.gameLists
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (list) => { dispatch(changeList(list)); },
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(GameBody);