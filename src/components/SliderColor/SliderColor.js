import AnimakitSlider from 'components/AnimakitSlider';

import React          from 'react';
import Dotnav         from 'components/Dotnav/Dotnav';

import dotnavStyles   from 'components/Dotnav/Dotnav.css';
import styles         from './SliderColor.css';

export default class SliderColor extends React.Component {
  static propTypes = {
    slides:            React.PropTypes.array,
    handleChangeSlide: React.PropTypes.func,
  };

  static defaultProps = {
    slides: [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
    ],
  };

  state = {
    index: 0,
    slide: 'red',
  };

  setSlide(index) {
    const slide = this.props.slides[index];
    this.setState({ index, slide });
    this.props.handleChangeSlide(slide);
  }

  listeners = {
    setSlide: this.setSlide.bind(this),
  };

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitSlider
          loop
          slide   =   { this.state.slide }
        >
        { this.props.slides.map(slide => {
          const title = slide.charAt(0).toUpperCase() + slide.slice(1);
          return (
            <div
              key       = { slide }
              className = { styles[`slide${title}`] }
            >
              <h2 className = { styles.slideTitle }>{ title }</h2>
            </div>
          );
        }) }
        </AnimakitSlider>
        <Dotnav
          withArrows
          count = { this.props.slides.length }
          index = { this.state.index }
          handleChange = { this.listeners.setSlide }
          classes = {{
            dots:      `${styles.nav} ${dotnavStyles.dotsHorizontal}`,
            dot:       dotnavStyles.dot,
            dotActive: dotnavStyles.dotActive,
            arrowPrev: `${styles.arrowPrev} ${dotnavStyles.arrowPrev}`,
            arrowNext: `${styles.arrowNext} ${dotnavStyles.arrowNext}`,
          }}
        />
      </div>
    );
  }
}
