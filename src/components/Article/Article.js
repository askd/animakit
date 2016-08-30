import React  from 'react';

import styles from './Article.css';

const Article = (props) =>
  <article className = { styles.root }>
    { props.children }
  </article>
;

Article.propTypes = {
  children: React.PropTypes.any,
};

export default Article;
