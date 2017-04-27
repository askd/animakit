import React from 'react';
import PropTypes from 'prop-types';

import styles from './CloseButton.css';

const CloseButton = (props) =>
  <button
    type="button"
    className={ `${styles.button} ${props.className}` }
    onClick={ props.handleClick }
  />
;

CloseButton.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CloseButton;
