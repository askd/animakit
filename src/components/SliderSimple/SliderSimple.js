import AnimakitSlider from 'components/AnimakitSlider/AnimakitSlider'; // 'animakit-slider';

import React          from 'react';

import styles         from './SliderSimple.css';

export default class SliderSimple extends React.Component {
  static propTypes = {
    slides:            React.PropTypes.array,
    handleChangeSlide: React.PropTypes.func,
  };

  static defaultProps = {
    slides: [
      'mars',
      'earth',
      'venus',
      'mercury',
    ],
  };

  state = {
    slide: 'mars',
  };

  componentWillMount() {
    this.listeners.setSlide = this.props.slides.map(slide => this.setSlide.bind(this, slide), this);
  }

  setSlide(slide) {
    this.setState({ slide });
    this.props.handleChangeSlide(slide);
  }

  listeners = {
    setSlide: [],
  };

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitSlider
          slide   =   { this.state.slide }
        >
          <div
            key       = { this.props.slides[0] }
            className = { styles.slideMars }
          >
            <h2 className = { styles.slideTitle }>Mars</h2>
          </div>
          <div
            key       = { this.props.slides[1] }
            className = { styles.slideEarth }
          >
            <h2 className = { styles.slideTitle }>Earth</h2>
          </div>
          <div
            key       = { this.props.slides[2] }
            className = { styles.slideVenus }
          >
            <h2 className = { styles.slideTitle }>Venus</h2>
          </div>
          <div
            key       = { this.props.slides[3] }
            className = { styles.slideMercury }
          >
            <h2 className = { styles.slideTitle }>Mercury</h2>
          </div>
        </AnimakitSlider>
        <ul className = { styles.nav }>
          { this.props.slides.map((slide, i) =>
            <li
              key = { slide }
              className = { this.state.slide === slide ? styles.navItemActive : styles.navItem }
              onClick = { this.listeners.setSlide[i] }
            />
          , this)}
        </ul>
      </div>
    );
  }
}
