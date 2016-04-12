import React           from 'react';
import { Link }        from 'react-router';
import AnimakitRotator from 'animakit-rotator';

import AppStyles       from './App.css';

import './favicon.png';

export class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    routes:   React.PropTypes.array,
    params:   React.PropTypes.any
  };

  getNavTitle(path) {
    if (path === '/') return 'Animakit';
    if (path === '/rotator') return 'Rotator';
    if (path === '/expander') return 'Expander';
    return '';
  }

  renderNav() {
    const navLen = this.props.routes.length;
    return (
      <nav className = { AppStyles.topnav }>
        { this.props.routes.map((route, i) => {
          if (i === navLen - 1) {
            return (
              <span key={ i } className={ AppStyles.topnavLink }>
                { this.getNavTitle(route.path) }
              </span>
            );
          }
          return (
            <Link key={ i } to={ route.path } className={ AppStyles.topnavLink }>
              { this.getNavTitle(route.path) }
            </Link>
          );
        }) }
      </nav>
    );
  }

  renderRibbon() {
    const navLen = this.props.routes.length;
    if (navLen === 1) return null;

    const path = this.props.routes[navLen - 1].path.substr(1);
    return (
      <div className = { AppStyles.github }>
        <div className = { AppStyles.githubRibbon }>
          <a
            className = { AppStyles.githubLink }
            href = { `https://github.com/askd/animakit-${ path }` }
            target = "_blank"
          >Fork me on GitHub</a>
        </div>
      </div>
    );
  }

  render() {
    const showLinks = this.props.children === null;
    return (
      <div className = { AppStyles.root }>
        <header className = { AppStyles.header }>
          { this.renderNav() }
        </header>
        { showLinks && <main className = { AppStyles.main }>
          <p className = { AppStyles.mainText }>React components developed to make your site more friendly ;)</p>
          <nav className = { AppStyles.nav }>
            <ul className = { AppStyles.navList }>
              <li className = { AppStyles.navItem }>
                <Link to = "/rotator" className = { AppStyles.navLinkRotator }>
                  <AnimakitRotator>
                    <div className = { AppStyles.navLinkRotatorSide } key = "1">Rotator</div>
                    <div className = { AppStyles.navLinkRotatorSide } key = "2" />
                    <div className = { AppStyles.navLinkRotatorSide } key = "3" />
                    <div className = { AppStyles.navLinkRotatorSide } key = "4" />
                    <div className = { AppStyles.navLinkRotatorSide } key = "5" />
                  </AnimakitRotator>
                </Link>
                <p className = { AppStyles.navText }>Rotate your components in&nbsp;three-dimensional space</p>
              </li>
              <li className = { AppStyles.navItem }>
                <Link to = "/expander" className = { AppStyles.navLinkExpander }>
                  <div>Expander</div>
                </Link>
                <p className = { AppStyles.navText }>Expand and collapse content of&nbsp;your&nbsp;components</p>
              </li>
            </ul>
          </nav>
        </main> }

        { !showLinks && this.props.children }

        { this.renderRibbon() }
      </div>
    );
  }
}
