import React  from 'react';

import styles from './Intro.css';

export default class Intro extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div className = { styles.root }>
        { this.props.children }
      </div>
    );
  }
}
