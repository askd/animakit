import AnimakitSlider from 'components/AnimakitSlider/AnimakitSlider'; // 'animakit-slider';

import React          from 'react';
import Dotnav         from 'components/Dotnav/Dotnav';

import styles         from './SliderSimple.css';

export default class SliderSimple extends React.Component {
  static propTypes = {
    slidesCount:       React.PropTypes.number,
    handleChangeSlide: React.PropTypes.func,
  };

  static defaultProps = {
    slidesCount: 11,
  };

  state = {
    slide: 0,
  };

  onClick() {
    let slide = this.state.slide;
    slide++;
    if (slide >= this.props.slidesCount) slide = 0;
    this.setSlide(slide);
  }

  setSlide(slide) {
    this.setState({ slide });
    this.props.handleChangeSlide(slide);
  }

  listeners = {
    onClick:  this.onClick.bind(this),
    setSlide: this.setSlide.bind(this),
  };

  render() {
    return (
      <div className = { styles.root }>
        <div className = { styles.title }>
          Photos by <a href="https://www.flickr.com/photos/nasacommons">NASA on The Commons</a>
        </div>
        <div
          className = { styles.content }
          onClick = { this.listeners.onClick }
        >
          <AnimakitSlider
            skip
            flexible
            slide = { this.state.slide }
            duration = { 500 }
          >
          { [...Array(this.props.slidesCount)].map((_, i) => {
            const image = (i < 10) ? `0${i}` : i;
            return (
              <div
                key       = { i }
                className = { styles.slide }
              >
                <img
                  className = { styles.image }
                  src = { require(`./images/nasa/${image}.jpg`) }
                  alt = ""
                />
              </div>
            );
          }) }
          </AnimakitSlider>
        </div>
        <div className = { styles.nav }>
          <Dotnav
            count = { this.props.slidesCount }
            index = { this.state.slide }
            colors = { [3] }
            handleChange = { this.listeners.setSlide }
          />
        </div>
      </div>
    );
  }
}
