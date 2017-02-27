import React from 'react';

import BackLink from 'components/BackLink/BackLink';
import Main from 'components/Main/Main';

import styles from './App.css';

const App = (props) => {
  const navLen = props.routes.length;

  const isMainPage = navLen === 1;
  const rootPath = props.routes[0].path;

  return (
    <div className = { styles.root }>
      { !isMainPage && <BackLink to={rootPath} /> }

      { isMainPage && <Main /> }

      { !isMainPage && props.children }
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.any,
  routes: React.PropTypes.array,
};

export default App;
