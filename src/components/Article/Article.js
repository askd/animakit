import React from 'react';

import styles from './Article.css';

const Article = (props) => {
  let className = styles.root;
  if (props.accent) className += ` ${styles.rootAccent}`;
  if (props.centered) className += ` ${styles.rootCentered}`;
  return (
    <article className={ className }>
      { props.children }
    </article>
  );
};

Article.propTypes = {
  children: React.PropTypes.any,
  accent: React.PropTypes.bool,
  centered: React.PropTypes.bool,
};

export default Article;
