import React from 'react';
import PropTypes from 'prop-types';

import styles from './IntroButton.css';

const IntroButton = (props) => {
  if (props.link) {
    return (
      <a
        href={ props.link }
        target="_blank"
        rel="noopener noreferrer"
        className={ `${styles.button} ${props.className}` }
      >
        { props.children }
      </a>
    );
  }
  return (
    <button
      type="button"
      className={ `${styles.button} ${props.className}` }
      onClick={ props.handleClick }
    >
      { props.children }
    </button>
  );
};

IntroButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  link: PropTypes.string,
  handleClick: PropTypes.func,
};

IntroButton.defaultProps = {
  className: '',
};

export default IntroButton;
