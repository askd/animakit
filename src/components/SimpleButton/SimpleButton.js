import React from 'react';

const SimpleButton = (props) =>
  <button
    className = { props.className }
    onClick   = { props.handleClick }
  >
    { props.caption }
  </button>
;

SimpleButton.propTypes = {
  className:   React.PropTypes.string,
  caption:     React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default SimpleButton;
