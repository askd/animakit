import React from 'react';
import AnimakitSlider from 'components/AnimakitSlider';

import Dotnav from 'components/Dotnav/Dotnav';

import pathToImage from 'utils/path-to-image';

import dotnavStyles from 'components/Dotnav/Dotnav.css';
import styles from './SliderFlexible.css';

export default class SliderFlexible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: 0,
    };

    this.listeners = {
      onClick: this.onClick.bind(this),
      setSlide: this.setSlide.bind(this),
    };
  }

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

  render() {
    return (
      <div className={ styles.root }>
        <div className={ styles.title }>
          Photos by <a href="https://www.flickr.com/photos/nasacommons">NASA on The Commons</a>
        </div>
        <div
          className={ styles.content }
          onClick = { this.listeners.onClick }
        >
          <AnimakitSlider
            skip
            flexible
            slide = { this.state.slide }
            duration = { 500 }
          >
            { Array.from({ length: this.props.slidesCount }, (_, i) => {
              const image = (i < 10) ? `0${i}` : i;
              return (
                <div
                  key={ i }
                  className={ styles.slide }
                >
                  <img
                    className={ styles.image }
                    src={pathToImage(`nasa${image}`)}
                    alt=""
                  />
                </div>
              );
            }) }
          </AnimakitSlider>
        </div>
        <Dotnav
          withArrows
          count={ this.props.slidesCount }
          index={ this.state.slide }
          handleChange={ this.listeners.setSlide }
          classes={{
            dots: `${styles.nav} ${dotnavStyles.dotsHorizontal} ${dotnavStyles.dotsHighlighted}`,
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

SliderFlexible.propTypes = {
  slidesCount: React.PropTypes.number,
  handleChangeSlide: React.PropTypes.func,
};

SliderFlexible.defaultProps = {
  slidesCount: 11,
};
