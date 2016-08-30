import React  from 'react';

import styles from './Code.css';

const Code = (props) =>
  <div className = { styles.root }>
    { props.children }
  </div>
;

Code.propTypes = {
  children: React.PropTypes.any,
};

export default Code;
