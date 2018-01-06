import React from 'react';
import PropTypes from 'prop-types';
import GameBoxShape from '../components/GameBoxShape.js';

function getClass(value) {
  if (value) {
    return ` box-${value}`
  }
  return ''
}

function GameBox(props) {
  return (
    <div className={'box' + getClass(props.value)} >
      <div className="box-content">{props.value}</div>
      <GameBoxShape />
    </div>
  );
}

GameBox.propTypes = {
  value: PropTypes.string.isRequired,
};

GameBox.defaultProps = {
  value: ''
}

export default GameBox;