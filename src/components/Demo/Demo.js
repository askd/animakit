import React from 'react';

import styles from './Demo.css';

export default class Demo extends React.PureComponent {
  static propTypes = {
    text:     React.PropTypes.any,
    children: React.PropTypes.any,
  };

  render() {
    const hasText = !!this.props.text;

    return (
      <div
        className = { styles.root }
      >
        { hasText && <p className = { styles.text }>{ this.props.text }</p> }
        <div className = { styles.content }>
          { this.props.children }
        </div>
      </div>
    );
  }
}
