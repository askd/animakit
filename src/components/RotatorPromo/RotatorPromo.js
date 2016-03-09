import React           from 'react';
import styles          from './RotatorPromo.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorPromo extends React.Component {
  static propTypes = {
    sides:            React.PropTypes.array,
    handleChangeSide: React.PropTypes.func
  };

  static defaultProps = {
    sides: [
      'spring',
      'summer',
      'autumn',
      'winter'
    ]
  };

  state = {
    side: 'spring'
  };

  listeners = {
    setSide: []
  };

  setSide(side) {
    this.setState({ side });
    this.props.handleChangeSide(side);
  }

  componentWillMount() {
    this.listeners.setSide = this.props.sides.map(side => {
      return this.setSide.bind(this, side);
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
            key       = { this.props.sides[0] }
            className = { styles.slideSpring }
          >
            <h2 className = { styles.slideTitle }>Spring</h2>
            <p className = { styles.slideText }>
              Spring is the time of year when it is summer in the sun and&nbsp;winter in&nbsp;the&nbsp;shade.
            </p>
          </div>
          <div
            key       = { this.props.sides[1] }
            className = { styles.slideSummer }
          >
            <h2 className = { styles.slideTitle }>Summer</h2>
            <p className = { styles.slideText }>
              Summertime is always the best of&nbsp;what might be.
            </p>
          </div>
          <div
            key       = { this.props.sides[2] }
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
            key       = { this.props.sides[3] }
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
          { this.props.sides.map((side, i) => {
            return (
              <li
                key = { side }
                className = { this.state.side === side ? styles.navItemActive : styles.navItem }
                onClick = { this.listeners.setSide[i] }
              />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
