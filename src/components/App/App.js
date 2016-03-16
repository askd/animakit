import React           from 'react';
import { Link }        from 'react-router';
import AnimakitRotator from 'animakit-rotator';

import styles          from './App.css';

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
        { showLinks && <main className = { styles.main }>
          <p className = { styles.mainText }>React components developed to make your site more friendly ;)</p>
          <Link to = "/rotator" className = { styles.itemRotator }>
            <AnimakitRotator>
              <div className = { styles.itemRotatorSide } key = "1">Rotator</div>
              <div className = { styles.itemRotatorSide } key = "2" />
              <div className = { styles.itemRotatorSide } key = "3" />
              <div className = { styles.itemRotatorSide } key = "4" />
              <div className = { styles.itemRotatorSide } key = "5" />
            </AnimakitRotator>
          </Link>
        </main> }
        { !showLinks && this.props.children }
        <div className = { styles.github }>
          <div className = { styles.githubRibbon }>
            <a
              className = { styles.githubLink }
              href = "https://github.com/askd/animakit-rotator"
              target = "_blank"
            >Fork me on GitHub</a>
          </div>
        </div>
      </div>
    );
  }
}
