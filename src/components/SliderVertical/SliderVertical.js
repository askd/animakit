import AnimakitSlider from 'components/AnimakitSlider';

import React from 'react';
import PropTypes from 'prop-types';
// import Dotnav from 'components/Dotnav/Dotnav';
import Dotnav from 'dotnav';

import pathToImage from 'utils/path-to-image';

import dotnavStyles from 'components/Dotnav/Dotnav-my.css';
import styles from './SliderVertical.css';

export default class SliderVertical extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      slide: 'mars',
    };

    this.listeners = {
      setSlide: this.setSlide.bind(this),
    };
  }

  setSlide(index) {
    const slide = this.props.slides[index];
    this.setState({ index, slide });
    this.props.handleChangeSlide(slide);
  }

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitSlider
          slide = { this.state.slide }
          vertical
        >
          <div
            key = { this.props.slides[0] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[0])}
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
            key = { this.props.slides[1] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[1])}
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
            key = { this.props.slides[2] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[2])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Venus</h2>
            <p className = { styles.slideText }>
              {`Venus is a terrestrial planet and is sometimes called Earth's "sister planet"
              because of their similar size, mass, proximity to the Sun and bulk composition`}
            </p>
          </div>
          <div
            key = { this.props.slides[3] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[3])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Mercury</h2>
            <p className = { styles.slideText }>
              {`Mercury is one of four terrestrial planets in the Solar System,
                the smallest, the one closest to the Sun,
                and is a rocky body like Earth`}
            </p>
          </div>
        </AnimakitSlider>
        <Dotnav
          count = { this.props.slides.length }
          index = { this.state.index }
          handleChange = { this.listeners.setSlide }
          classes = {{
            dots: `${dotnavStyles.dotsVertical} ${dotnavStyles.dotsColored} ${styles.nav}`,
            dot: dotnavStyles.dot,
            dotActive: dotnavStyles.dotActive,
          }}
        />
      </div>
    );
  }
}

SliderVertical.propTypes = {
  slides: PropTypes.array,
  handleChangeSlide: PropTypes.func,
};

SliderVertical.defaultProps = {
  slides: [
    'mars',
    'earth',
    'venus',
    'mercury',
  ],
};
