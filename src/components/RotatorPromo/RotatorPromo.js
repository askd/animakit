import React           from 'react';
import styles          from './RotatorPromo.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorPromo extends React.Component {
  static propTypes = {
    sidesCount: React.PropTypes.number
  };

  static defaultProps = {
    sidesCount: 4
  };

  state = {
    side: 0
  };

  listeners = {
    setSide:  [],
    nextSide: this.nextSide.bind(this)
  };

  setSide(side) {
    this.setState({ side });
  }

  nextSide() {
    let side = this.state.side + 1;
    if (side >= this.props.sidesCount) side = 0;

    this.setState({ side });
  }

  componentWillMount() {
    this.listeners.setSide = Array.from(Array(this.props.sidesCount), (_, i) => {
      return this.setSide.bind(this, i);
    }, this);
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
        <ul className = { styles.nav }>
          { Array.from(Array(this.props.sidesCount), (_, i) => {
            return (
              <li
                key = { i }
                className = { this.state.side === i ? styles.navItemActive : styles.navItem }
                onClick = { this.listeners.setSide[i] }
              />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
