import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import BackLink from 'components/BackLink/BackLink';

import styles from './App.css';

const App = withRouter(({ location, children }) => {
  const isMainPage = location.pathname === '/';

  return (
    <div className = { styles.root }>
      { !isMainPage && <BackLink to={ '/' } /> }

      { children }
    </div>
  );
});

App.propTypes = {
  location: PropTypes.any,
  children: PropTypes.any,
};

export default App;
