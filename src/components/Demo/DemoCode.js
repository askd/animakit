import React from 'react';

import styles from './Demo.css';

export default class DemoCode extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div className = { styles.code }>
        { this.props.children }
      </div>
    );
  }
}
