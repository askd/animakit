import AnimakitSlider from 'components/AnimakitSlider/AnimakitSlider'; // 'animakit-slider';

import React          from 'react';
import Dotnav         from 'components/Dotnav/Dotnav';

import styles         from './SliderSimple.css';

export default class SliderSimple extends React.Component {
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
    slide: 'red',
  };

  setSlide(index) {
    const slide = this.props.slides[index];
    this.setState({ slide });
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
        <div className = { styles.nav }>
          <Dotnav
            count = { this.props.slides.length }
            handleChange = { this.listeners.setSlide }
          />
        </div>
      </div>
    );
  }
}
