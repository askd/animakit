import React           from 'react';

import Header          from 'components/Header/Header';
import Ribbon          from 'components/Ribbon/Ribbon';
import Main            from 'components/Main/Main';

import styles          from './App.css';

import './favicon.png';

export default class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
    routes:   React.PropTypes.array,
  };

  render() {
    const showLinks = this.props.children === null;

    const navLen = this.props.routes.length;
    const showRibbon = navLen > 1;
    const ribbonPath = this.props.routes[navLen - 1].path.substr(1);

    return (
      <div className = { styles.root }>
        <Header routes={ this.props.routes } />

        { showLinks && <Main /> }

        { !showLinks && this.props.children }

        { showRibbon && <Ribbon path={ ribbonPath } /> }
      </div>
    );
  }
}
