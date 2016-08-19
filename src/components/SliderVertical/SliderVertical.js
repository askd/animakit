import AnimakitSlider from 'components/AnimakitSlider/AnimakitSlider'; // 'animakit-slider';

import React          from 'react';

import styles         from './SliderVertical.css';

export default class SliderVertical extends React.Component {
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
          vertical
        >
          <div
            key       = { this.props.slides[0] }
            className = { styles.slideMars }
          >
            <h2 className = { styles.slideTitle }>Mars</h2>
            <p className = { styles.slideText }>
              {`Mars is a terrestrial planet with a thin atmosphere,
              having surface features reminiscent both of the impact craters of the Moon
              and the valleys, deserts, and polar ice caps of Earth`}
            </p>
          </div>
          <div
            key       = { this.props.slides[1] }
            className = { styles.slideEarth }
          >
            <h2 className = { styles.slideTitle }>Earth</h2>
            <p className = { styles.slideText }>
              {`Earth is the third planet from the Sun, the densest planet in the Solar System,
                the largest of the Solar System's four terrestrial planets,
                and the only astronomical object known to harbor life`}
            </p>
          </div>
          <div
            key       = { this.props.slides[2] }
            className = { styles.slideVenus }
          >
            <h2 className = { styles.slideTitle }>Venus</h2>
            <p className = { styles.slideText }>
              {`Venus is a terrestrial planet and is sometimes called Earth's "sister planet"
              because of their similar size, mass, proximity to the Sun and bulk composition`}
            </p>
          </div>
          <div
            key       = { this.props.slides[3] }
            className = { styles.slideMercury }
          >
            <h2 className = { styles.slideTitle }>Mercury</h2>
            <p className = { styles.slideText }>
              {`Mercury is one of four terrestrial planets in the Solar System,
                the smallest, the one closest to the Sun,
                and is a rocky body like Earth`}
            </p>
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
