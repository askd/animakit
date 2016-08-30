import React  from 'react';

import styles from './Intro.css';

const Intro = (props) =>
  <div className = { styles.root }>
    { props.children }
  </div>
;

Intro.propTypes = {
  children: React.PropTypes.any,
};

export default Intro;
