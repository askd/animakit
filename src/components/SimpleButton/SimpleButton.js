import React from 'react';
import PropTypes from 'prop-types';

const SimpleButton = (props) =>
  <button
    type = "button"
    className = { props.className }
    onClick = { props.handleClick }
  >
    { props.caption }
  </button>
;

SimpleButton.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SimpleButton;
