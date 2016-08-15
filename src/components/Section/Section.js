import React  from 'react';

import styles from './Section.css';

export default class Section extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section className = { styles.root }>
        { this.props.children }
      </section>
    );
  }
}
