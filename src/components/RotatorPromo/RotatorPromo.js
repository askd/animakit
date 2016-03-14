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
      'mars',
      'earth',
      'venus',
      'mercury'
    ]
  };

  state = {
    side: 'mars'
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
            key       = { this.props.sides[1] }
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
            key       = { this.props.sides[2] }
            className = { styles.slideVenus }
          >
            <h2 className = { styles.slideTitle }>Venus</h2>
            <p className = { styles.slideText }>
              {`Venus is a terrestrial planet and is sometimes called Earth's "sister planet"
              because of their similar size, mass, proximity to the Sun and bulk composition`}
            </p>
          </div>
          <div
            key       = { this.props.sides[3] }
            className = { styles.slideMercury }
          >
            <h2 className = { styles.slideTitle }>Mercury</h2>
            <p className = { styles.slideText }>
              {`Mercury is one of four terrestrial planets in the Solar System,
                the smallest, the one closest to the Sun,
                and is a rocky body like Earth`}
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
