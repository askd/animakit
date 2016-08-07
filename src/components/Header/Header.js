import React    from 'react';
import { Link } from 'react-router';

import styles   from './Header.css';

export default class Header extends React.PureComponent {
  static propTypes = {
    routes: React.PropTypes.array,
  };

  getNavTitle(path) {
    if (path === '/') return 'Animakit';
    if (path === '/rotator') return 'Rotator';
    if (path === '/expander') return 'Expander';
    if (path === '/elastic') return 'Elastic';
    return '';
  }

  render() {
    const navLen = this.props.routes.length;

    return (
      <header className = { styles.header }>
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
