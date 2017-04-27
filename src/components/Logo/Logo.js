import React from 'react';
import PropTypes from 'prop-types';

import styles from './Logo.css';

const Logo = (props) =>
  <div className={ `${styles.logo} ${props.className}` } />
;

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
