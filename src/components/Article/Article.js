import React  from 'react';

import styles from './Article.css';

export default class Article extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <article className = { styles.root }>
        { this.props.children }
      </article>
    );
  }
}
