import React from 'react';
import PropTypes from 'prop-types';

import styles from './SimpleText.css';

const SimpleText = (props) =>
  <article className = { `${props.className} ${styles.root}` }>
    { props.title &&
      <h2 className = { styles.title }>
        { props.title }
      </h2>
    }
    <div className = { styles.couplet }>
      <p>Wow! I feel good, I&nbsp;knew&nbsp;that&nbsp;I&nbsp;would&nbsp;now</p>
      <p>I feel good, I knew that I would now</p>
      <p>So good, so good</p>
      <p>I got you</p>
    </div>
    { props.showMore &&
      <div className = { styles.couplet }>
        <p>Wow! I feel nice, like sugar and spice</p>
        <p>I feel nice, like sugar and spice</p>
        <p>So nice, so nice, cause I got you</p>
      </div>
    }
    { props.hasMore && <span
      className = { styles.more }
      onClick = { props.handleToggle }
    >
      { props.showMore ? '- Couplet' : '+ Couplet' }
    </span> }
  </article>
;

SimpleText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hasMore: PropTypes.bool,
  showMore: PropTypes.bool,
  handleToggle: PropTypes.func,
};

SimpleText.defaultProps = {
  className: null,
  title: null,
  hasMore: true,
  showMore: false,
};

export default SimpleText;
