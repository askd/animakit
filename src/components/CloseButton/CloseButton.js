import React from 'react';

import styles from './CloseButton.css';

const CloseButton = (props) =>
  <button
    type="button"
    className={ `${styles.button} ${props.className}` }
    onClick={ props.handleClick }
  />
;

CloseButton.propTypes = {
  className: React.PropTypes.string,
  handleClick: React.PropTypes.func,
};

export default CloseButton;
