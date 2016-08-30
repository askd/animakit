import React  from 'react';

import styles from './Ribbon.css';

const Ribbon = (props) =>
  <div className = { props.fixed ? styles.rootFixed : styles.root }>
    <div className = { styles.ribbon }>
      <a
        className = { styles.link }
        href = { `https://github.com/animakit/animakit-${props.path}` }
        target = "_blank"
        rel = "noopener noreferrer"
      >Fork me on GitHub</a>
    </div>
  </div>
;

Ribbon.propTypes = {
  path:  React.PropTypes.string,
  fixed: React.PropTypes.bool,
};

export default Ribbon;
