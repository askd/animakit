import React from 'react';
import PropTypes from 'prop-types';

import styles from './Demo.css';

const DemoComponent = (props) => {
  const hasComment = !!props.comment;

  return (
    <div className = { props.fullscreen ? styles.componentFullscreen : styles.component }>
      { hasComment && <p className = { styles.comment }>
        { props.comment }
      </p> }
      { props.children }
    </div>
  );
};

DemoComponent.propTypes = {
  comment: PropTypes.any,
  fullscreen: PropTypes.bool,
  children: PropTypes.any,
};

export default DemoComponent;
