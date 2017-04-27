import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.css';

const Section = (props) =>
  <section className = { styles.root }>
    { props.children }
  </section>
;

Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
