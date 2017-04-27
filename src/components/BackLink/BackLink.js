import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  to: PropTypes.string,
};

export default BackLink;
