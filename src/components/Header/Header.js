import React    from 'react';
import { Link } from 'react-router';

import styles   from './Header.css';

export default class Header extends React.PureComponent {
  static propTypes = {
    routes: React.PropTypes.array,
  };

  getNavTitle(path) {
    if (path === '/') return 'Animakit';

    return `${path.substr(1, 1).toUpperCase()}${path.substr(2)}`;
  }

  render() {
    const navLen = this.props.routes.length;

    return (
      <header className = { styles.header }>
        <div className = { styles.logo } />
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
      </header>
    );
  }
}
