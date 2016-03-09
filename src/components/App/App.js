import React    from 'react';
import { Link } from 'react-router';

import styles   from './App.css';

export class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    routes:   React.PropTypes.array,
    params:   React.PropTypes.any
  };

  getNavTitle(path) {
    if (path === '/') return 'Animakit';
    if (path === '/rotator') return 'Rotator';
    return '';
  }

  renderNav() {
    const navLen = this.props.routes.length;
    return (
      <nav className = { styles.nav }>
        { this.props.routes.map((route, i) => {
          if (i === navLen - 1) {
            return (
              <span key={ i } className={ styles.navLink }>
                { this.getNavTitle(route.path) }
              </span>
            );
          }
          return (
            <Link key={ i } to={ route.path } className={ styles.navLink }>
              { this.getNavTitle(route.path) }
            </Link>
          );
        }) }
      </nav>
    );
  }

  render() {
    const showLinks = this.props.children === null;
    return (
      <div className = { styles.root }>
        <header className = { styles.header }>
          { this.renderNav() }
        </header>
        { showLinks && <Link to="/rotator" className={ styles.item }>Rotator</Link> }
        { !showLinks && this.props.children }
        <div className={ styles.github }>
          <div className={ styles.githubRibbon }>
            <a
              className = { styles.githubLink }
              href="https://github.com/askd/animakit-rotator"
              target="_blank"
            >Fork me on GitHub</a>
          </div>
        </div>
      </div>
    );
  }
}
