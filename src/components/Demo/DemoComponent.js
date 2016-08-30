import React from 'react';

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
  comment:    React.PropTypes.any,
  fullscreen: React.PropTypes.bool,
  children:   React.PropTypes.any,
};

export default DemoComponent;
