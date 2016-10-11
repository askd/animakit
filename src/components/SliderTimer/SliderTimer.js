import AnimakitSlider from 'components/AnimakitSlider';

import React          from 'react';

import styles         from './SliderTimer.css';

export default class SliderTimer extends React.Component {
  static propTypes = {
    handleChangeSlide: React.PropTypes.func,
  };

  state = {
    slides:    [0, 0, 0, 0, 0, 0],
  };

  animActive = false; // eslint-disable-line
  animInterval = false;
  animRAF = false;

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

    slides.forEach((value, index) => {
      if (this.state.slides[index] !== value) {
        this.props.handleChangeSlide(value, index);
      }
    });

    this.setState({ slides });
  }

  listeners = {
    setTime:            this.setTime.bind(this),
    onVisibilityChange: this.onVisibilityChange.bind(this),
  };

  render() {
    const digits = Array.from(Array(10).keys());

    return (
      <div className = { styles.root }>
        { Array.from(Array(6).keys()).map(index =>
          <div
            key = { index }
            className = { styles.digits }
          >
            <AnimakitSlider
              slide = { this.state.slides[index] }
              vertical
              loop
            >
              { digits.map(digit => <div key = { digit } className = { styles.digit }>{ digit }</div>) }
            </AnimakitSlider>
          </div>
        ) }
      </div>
    );
  }
}
