import React from 'react';
import PropTypes from 'prop-types';

import styles from './Demo.css';

const DemoCode = (props) =>
  <div className = { styles.code }>
    { props.children }
  </div>
;

DemoCode.propTypes = {
  children: PropTypes.any,
};

export default DemoCode;
