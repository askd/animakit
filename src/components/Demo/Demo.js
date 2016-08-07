import React from 'react';

import styles from './Demo.css';

export default class Demo extends React.PureComponent {
  static propTypes = {
    title:    React.PropTypes.string,
    children: React.PropTypes.any,
  };

  render() {
    const hasTitle = !!this.props.title;

    return (
      <div
        className = { styles.root }
      >
        { hasTitle && <p className = { styles.title }>{ this.props.title }</p> }
        <div className = { styles.content }>
          { this.props.children }
        </div>
      </div>
    );
  }
}
