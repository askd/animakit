import AnimakitSlider from 'components/AnimakitSlider';

import React          from 'react';
import Dotnav         from 'components/Dotnav/Dotnav';

import pathToImage    from 'utils/path-to-image';

import dotnavStyles   from 'components/Dotnav/Dotnav.css';
import styles         from './SliderSimple.css';

export default class SliderSimple extends React.Component {
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
          slide   =   { this.state.slide }
        >
          <div
            key       = { this.props.slides[0] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[0])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Mars</h2>
          </div>
          <div
            key       = { this.props.slides[1] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[1])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Earth</h2>
          </div>
          <div
            key       = { this.props.slides[2] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[2])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Venus</h2>
          </div>
          <div
            key       = { this.props.slides[3] }
            className = { styles.slide }
          >
            <img
              className = { styles.slideImage }
              src = {pathToImage(this.props.slides[3])}
              alt = ""
            />
            <h2 className = { styles.slideTitle }>Mercury</h2>
          </div>
        </AnimakitSlider>
        <Dotnav
          withArrows
          count = { this.props.slides.length }
          index = { this.state.index }
          handleChange = { this.listeners.setSlide }
          classes = {{
            dots:      `${styles.nav} ${dotnavStyles.dotsHorizontal} ${dotnavStyles.dotsColored}`,
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

SliderSimple.propTypes = {
  slides:            React.PropTypes.array,
  handleChangeSlide: React.PropTypes.func,
};

SliderSimple.defaultProps = {
  slides: [
    'mars',
    'earth',
    'venus',
    'mercury',
  ],
};
