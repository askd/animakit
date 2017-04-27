import AnimakitSlider from 'components/AnimakitSlider';

import React from 'react';
import PropTypes from 'prop-types';
import Dotnav from 'components/Dotnav/Dotnav';

import dotnavStyles from 'components/Dotnav/Dotnav.css';
import styles from './SliderColor.css';

export default class SliderColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      slide: 'one-two',
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
    const titles = [
      'One, two',
      'Three, four',
      'Five, six',
      'Seven, eight',
      'Nine, ten',
    ];
    const texts = [
      'How are you?',
      'Who\'s at the door?',
      'My name is Fix.',
      'Sorry, I\'m late.',
      'Say it again.',
    ];
    return (
      <div className = { styles.root }>
        <AnimakitSlider
          loop
          slide = { this.state.slide }
        >
          { this.props.slides.map((slide, index) =>
            <div
              key = { slide }
              className = { styles[`slide${index + 1}`] }
            >
              <h2 className = { styles.slideTitle }>{ titles[index] }.</h2>
              <p className = { styles.slideText }>{ texts[index] }</p>
            </div>
          ) }
        </AnimakitSlider>
        <Dotnav
          withArrows
          count = { this.props.slides.length }
          index = { this.state.index }
          handleChange = { this.listeners.setSlide }
          classes = {{
            dots: `${styles.nav} ${dotnavStyles.dotsHorizontal}`,
            dot: dotnavStyles.dot,
            dotActive: dotnavStyles.dotActive,
            arrowPrev: `${styles.arrowPrev} ${dotnavStyles.arrowPrev}`,
            arrowNext: `${styles.arrowNext} ${dotnavStyles.arrowNext}`,
          }}
        />
      </div>
    );
  }
}

SliderColor.propTypes = {
  slides: PropTypes.array,
  handleChangeSlide: PropTypes.func,
};

SliderColor.defaultProps = {
  slides: [
    'one-two',
    'three-four',
    'five-six',
    'seven-eight',
    'nine-ten',
  ],
};
