import React  from 'react';

import styles from './Code.css';

export default class Code extends React.PureComponent {
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
