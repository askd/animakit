import React from 'react';
import PropTypes from 'prop-types';

import styles from './Code.css';

const Code = (props) =>
  <div className = { styles.root }>
    { props.children }
  </div>
;

Code.propTypes = {
  children: PropTypes.any,
};

export default Code;
