import React from 'react';

import styles from './Demo.css';

const Demo = (props) => {
  const hasText = !!props.text;

  return (
    <div
      className = { styles.root }
    >
      { hasText && <p className = { styles.text }>{ props.text }</p> }
      <div className = { styles.content }>
        { props.children }
      </div>
    </div>
  );
};

Demo.propTypes = {
  text:     React.PropTypes.any,
  children: React.PropTypes.any,
};

export default Demo;
