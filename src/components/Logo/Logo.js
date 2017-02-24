import React    from 'react';

import styles   from './Logo.css';

const Logo = (props) =>
  <div className = { `${styles.logo} ${props.className}` } />
;

Logo.propTypes = {
  className: React.PropTypes.string,
};

export default Logo;
