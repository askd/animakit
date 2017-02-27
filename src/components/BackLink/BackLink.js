import React from 'react';
import { Link } from 'react-router';

import Logo from 'components/Logo/Logo';

import styles from './BackLink.css';

const BackLink = (props) =>
  <div className={ styles.root }>
    <Link
      to={props.to}
      className={ styles.link }
    />
    <Logo className={ styles.logo } />
  </div>
;

BackLink.propTypes = {
  to: React.PropTypes.string,
};

export default BackLink;
