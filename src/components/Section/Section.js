import React  from 'react';

import styles from './Section.css';

const Section  = (props) =>
  <section className = { styles.root }>
    { props.children }
  </section>
;

Section.propTypes = {
  children: React.PropTypes.any,
};

export default Section;
