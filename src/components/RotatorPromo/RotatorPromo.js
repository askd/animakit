import AnimakitRotator from 'components/AnimakitRotator';

import React from 'react';
import PropTypes from 'prop-types';
import Dotnav from 'components/Dotnav/Dotnav';

import pathToImage from 'utils/path-to-image';

import dotnavStyles from 'components/Dotnav/Dotnav.css';
import styles from './RotatorPromo.css';

export default class RotatorPromo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      side: 'mars',
    };

    this.listeners = {
      setSide: this.setSide.bind(this),
    };
  }

  setSide(index) {
    const side = this.props.sides[index];
    this.setState({ index, side });
    this.props.handleChangeSide(side);
  }

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitRotator
          side = { this.state.side }
          duration = { 2000 }
          shadow
        >
          <div
            key = { this.props.sides[0] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.sides[0])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Mars</h2>
            <p className = { styles.slideText }>
              {`Mars is a terrestrial planet with a thin atmosphere,
              having surface features reminiscent both of the impact craters of the Moon
              and the valleys, deserts, and polar ice caps of Earth`}
            </p>
          </div>
          <div
            key = { this.props.sides[1] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.sides[1])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Earth</h2>
            <p className = { styles.slideText }>
              {`Earth is the third planet from the Sun, the densest planet in the Solar System,
                the largest of the Solar System's four terrestrial planets,
                and the only astronomical object known to harbor life`}
            </p>
          </div>
          <div
            key = { this.props.sides[2] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.sides[2])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Venus</h2>
            <p className = { styles.slideText }>
              {`Venus is a terrestrial planet and is sometimes called Earth's "sister planet"
              because of their similar size, mass, proximity to the Sun and bulk composition`}
            </p>
          </div>
          <div
            key = { this.props.sides[3] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.sides[3])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Mercury</h2>
            <p className = { styles.slideText }>
              {`Mercury is one of four terrestrial planets in the Solar System,
                the smallest, the one closest to the Sun,
                and is a rocky body like Earth`}
            </p>
          </div>
        </AnimakitRotator>
        <Dotnav
          count = { this.props.sides.length }
          index = { this.state.index }
          handleChange = { this.listeners.setSide }
          classes = {{
            dots: `${styles.nav} ${dotnavStyles.dotsVertical} ${dotnavStyles.dotsColored}`,
            dot: dotnavStyles.dot,
            dotActive: dotnavStyles.dotActive,
          }}
        />
      </div>
    );
  }
}

RotatorPromo.propTypes = {
  sides: PropTypes.array,
  handleChangeSide: PropTypes.func,
};

RotatorPromo.defaultProps = {
  sides: [
    'mars',
    'earth',
    'venus',
    'mercury',
  ],
};
