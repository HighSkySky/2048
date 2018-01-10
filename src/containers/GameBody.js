import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameBox from './GameBox';
import { touchStart, touchEnd } from '../utils/touch.js';
import initSite from '../utils/initSite.js';
import moveSite from '../utils/moveSite';
import { initList, changeList } from '../reducers/gameApp.js';

class GameBody extends Component {
  _changeList({ value, index }) {
    const newList = this.props.list.slice(0);
    newList[index] = value;
    this.props.onChange(newList);
  }

  handleTouchStart = (ev) => {
    touchStart(ev);
  }

  handleTouchEnd = (ev) => {
    const target = touchEnd(ev);
    if (target) {
      const newlist = moveSite(target, this.props.list);
      const newSite = initSite(newlist);
      this._changeList(newSite);
    }
  }

  render() {
    return (
      <div className="body"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        { 
          this.props.list.map((value, index) => 
          <GameBox key={index} value={String(value)} />) 
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => { dispatch(initList()); },
    onChange: (list) => { dispatch(changeList(list)); }
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(GameBody);