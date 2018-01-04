import React from 'react';
import PropTypes from 'prop-types';

function GameBox(props) {
  return (
    <React.Fragment>
      <div className="baseBox-content">{props.value}</div>
      <div className="baseBox-shape" />
    </React.Fragment>
  );
}


GameBox.propTypes = {
  value: PropTypes.string
}

export default GameBox;