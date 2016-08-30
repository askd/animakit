import React from 'react';

import styles from './Demo.css';

const DemoCode = (props) =>
  <div className = { styles.code }>
    { props.children }
  </div>
;

DemoCode.propTypes = {
  children: React.PropTypes.any,
};

export default DemoCode;
