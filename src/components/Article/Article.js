import React from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.any,
  accent: PropTypes.bool,
  centered: PropTypes.bool,
};

export default Article;
