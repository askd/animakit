import React  from 'react';

import styles from './Article.css';

const Article = (props) =>
  <article className = { props.centered ? styles.rootCentered : styles.root }>
    { props.children }
  </article>
;

Article.propTypes = {
  children: React.PropTypes.any,
  centered: React.PropTypes.bool,
};

export default Article;
