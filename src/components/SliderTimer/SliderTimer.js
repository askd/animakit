import AnimakitSlider from 'components/AnimakitSlider';

import React from 'react';
import PropTypes from 'prop-types';

import styles from './SliderTimer.css';

export default class SliderTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [0, 0, 0, 0, 0, 0],
    };

    this.animActive = false; // eslint-disable-line
    this.animInterval = false;
    this.animRAF = false;

    this.listeners = {
      setTime: this.setTime.bind(this),
      onVisibilityChange: this.onVisibilityChange.bind(this),
    };
  }

  componentDidMount() {
    this.startAnimation();

    document.addEventListener('visibilitychange', this.listeners.onVisibilityChange);
  }

  componentWillUnmount() {
    this.stopAnimation();

    document.removeEventListener('visibilitychange', this.listeners.onVisibilityChange);
  }

  startAnimation() {
    if (this.animActive) return;
    this.animActive = true;

    this.animInterval = setInterval(() => {
      this.animRAF = requestAnimationFrame(this.listeners.setTime);
    }, 1000);
  }

  stopAnimation() {
    if (!this.animActive) return;
    this.animActive = false;

    if (this.animInterval) clearInterval(this.animInterval);
    if (this.animRAF) cancelAnimationFrame(this.animRAF);
  }

  onVisibilityChange() {
    if (document.visibilityState) this.startAnimation();
    else this.stopAnimation();
  }

  setTime() {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    mins = mins < 10 ? `0${mins}` : `${mins}`;
    secs = secs < 10 ? `0${secs}` : `${secs}`;

    const slides = [].concat(
      hours.split(''),
      mins.split(''),
      secs.split('')
    );

    const values = {};
    slides.forEach((value, index) => {
      if (this.state.slides[index] !== value) {
        values[index] = value;
      }
    });

    if (Object.keys(values).length) this.props.handleChangeSlide(values);

    this.setState({ slides });
  }

  render() {
    const digits10 = Array.from(Array(10).keys());
    const digits6 = Array.from(Array(6).keys());
    const digits2 = Array.from(Array(3).keys());

    return (
      <div className = { styles.root }>
        { Array.from(Array(6).keys()).map(index => {
          let digits;
          if (index === 0) {
            digits = digits2;
          } else {
            digits = index % 2 === 0 ? digits6 : digits10;
          }

          return (
            <div
              key = { index }
              className = { styles.digits }
            >
              <AnimakitSlider
                slide = { this.state.slides[index] }
                vertical
                loop
                skip
              >
                { digits.map(digit =>
                  <div key = { digit } className = { styles.digit }>{ digit }</div>
                ) }
              </AnimakitSlider>
            </div>
          );
        }) }
      </div>
    );
  }
}

SliderTimer.propTypes = {
  handleChangeSlide: PropTypes.func,
};
