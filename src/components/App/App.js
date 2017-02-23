import React           from 'react';

import Header          from 'components/Header/Header';
import Ribbon          from 'components/Ribbon/Ribbon';
import Main            from 'components/Main/Main';

import styles          from './App.css';

const App = (props) => {
  const showLinks = props.children === null;

  const navLen = props.routes.length;
  const ribbonPath = props.routes[navLen - 1].path.substr(1);
  const showRibbon = navLen > 1 && ribbonPath !== 'new';

  return (
    <div className = { styles.root }>
      <Header routes={ props.routes } />

      { showLinks && <Main /> }

      { !showLinks && props.children }

      { showRibbon && <Ribbon fixed path={ ribbonPath } /> }
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.any,
  routes:   React.PropTypes.array,
};

export default App;
