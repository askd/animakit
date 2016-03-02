import React           from 'react';
import styles          from './RotatorPromo.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorPromo extends React.Component {
  state = {
    side:       0,
    sidesCount: 4
  };

  listeners = {
    nextSide: this.nextSide.bind(this)
  };

  nextSide() {
    let side = this.state.side + 1;
    if (side >= this.state.sidesCount) side = 0;

    this.setState({ side });
  }

  componentDidMount() {
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(this.listeners.nextSide, 12000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitRotator
          side   =   { this.state.side }
          duration = { 2000 }
        >
          <div
            key       = "spring"
            className = { styles.slideSpring }
          >
            <h2 className = { styles.slideTitle }>Spring</h2>
            <p className = { styles.slideText }>
              Spring is the time of year when it is summer in the sun and&nbsp;winter in&nbsp;the&nbsp;shade.
            </p>
          </div>
          <div
            key       = "summer"
            className = { styles.slideSummer }
          >
            <h2 className = { styles.slideTitle }>Summer</h2>
            <p className = { styles.slideText }>
              Summertime is always the best of&nbsp;what might be.
            </p>
          </div>
          <div
            key       = "autumn"
            className = { styles.slideAutumn }
          >
            <h2 className = { styles.slideTitle }>Autumn</h2>
            <p className = { styles.slideText }>
              Autumn seemed to arrive suddenly that&nbsp;year.
              <br />
              The morning of the first September was crisp and golden as an apple.
            </p>
          </div>
          <div
            key       = "winter"
            className = { styles.slideWinter }
          >
            <h2 className = { styles.slideTitle }>Winter</h2>
            <p className = { styles.slideText }>
              If we had no winter, the spring would not be so pleasant:
              <br />
              if we did not sometimes taste of&nbsp;adversity, prosperity would not be so welcome.
            </p>
          </div>
        </AnimakitRotator>
      </div>
    );
  }
}
