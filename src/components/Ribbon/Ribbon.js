import React  from 'react';

import styles from './Ribbon.css';

export default class Ribbon extends React.PureComponent {
  static propTypes = {
    path:  React.PropTypes.string,
    fixed: React.PropTypes.bool,
  };

  render() {
    return (
      <div className = { this.props.fixed ? styles.rootFixed : styles.root }>
        <div className = { styles.ribbon }>
          <a
            className = { styles.link }
            href = { `https://github.com/animakit/animakit-${this.props.path}` }
            target = "_blank"
            rel = "noopener noreferrer"
          >Fork me on GitHub</a>
        </div>
      </div>
    );
  }
}
