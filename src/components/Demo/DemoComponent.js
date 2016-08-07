import React from 'react';

import styles from './Demo.css';

export default class DemoComponent extends React.PureComponent {
  static propTypes = {
    comment:    React.PropTypes.string,
    fullscreen: React.PropTypes.bool,
    children:   React.PropTypes.any,
  };

  render() {
    const hasComment = !!this.props.comment;

    return (
      <div className = { this.props.fullscreen ? styles.componentFullscreen : styles.component }>
        { hasComment && <p className = { styles.comment }>
          { this.props.comment }
        </p> }
        { this.props.children }
      </div>
    );
  }
}
