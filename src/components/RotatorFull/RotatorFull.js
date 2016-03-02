import React           from 'react';
import styles          from './RotatorFull.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorFull extends React.Component {
  static propTypes = {
    minSidesCount: React.PropTypes.number,
    maxSidesCount: React.PropTypes.number,
    minZoom:       React.PropTypes.number,
    maxZoom:       React.PropTypes.number
  };

  static defaultProps = {
    minSidesCount: 2,
    maxSidesCount: 6,
    minZoom:       1,
    maxZoom:       3
  };

  state = {
    axis:       'X',
    side:       0,
    sidesCount: 2,
    zoom:       1,
    back:       true,
    easing:     'cubic-bezier(.175,.885,.32,1.275)' // 'cubic-bezier(.45,-0.67,.53,1.63)'
  };

  listeners = {
    nextSide:    this.nextSide.bind(this),
    prevSide:    this.prevSide.bind(this),
    addSide:     this.addSide.bind(this),
    removeSide:  this.removeSide.bind(this),
    resetBack:   this.resetBack.bind(this),
    resetAxis:   this.resetAxis.bind(this),
    zoomIn:      this.zoomIn.bind(this),
    zoomOut:     this.zoomOut.bind(this),
    resetEasing: this.resetEasing.bind(this),
    keyDown:     this.keyDown.bind(this)
  };

  nextSide() {
    let side = this.state.side + 1;
    if (side >= this.state.sidesCount) side = 0;

    this.setState({ side });
  }

  prevSide() {
    let side = this.state.side - 1;
    if (side === -1) side = this.state.sidesCount - 1;

    this.setState({ side });
  }

  addSide() {
    let sidesCount = this.state.sidesCount + 1;
    if (sidesCount > this.props.maxSidesCount) sidesCount = this.props.maxSidesCount;

    this.setState({ sidesCount });
  }

  removeSide() {
    let sidesCount = this.state.sidesCount - 1;
    if (sidesCount < this.props.minSidesCount) sidesCount = this.props.minSidesCount;

    let side = this.state.side;
    if (side >= sidesCount) side = sidesCount - 1;

    this.setState({ side, sidesCount });
  }

  zoomIn() {
    let zoom = this.state.zoom + 1;
    if (zoom > this.props.maxZoom) zoom = this.props.maxZoom;

    this.setState({ zoom });
  }

  zoomOut() {
    let zoom = this.state.zoom - 1;
    if (zoom < this.props.minZoom) zoom = this.props.minZoom;

    this.setState({ zoom });
  }

  resetBack() {
    this.setState({
      back: !this.state.back
    });
  }

  resetAxis(event) {
    this.setState({
      axis: event.target.value
    });
  }

  resetEasing(event) {
    this.setState({
      easing: event.target.value
    });
  }

  keyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === 37 || keyCode === 38) {
      this.prevSide();
      event.preventDefault();
    }
    if (keyCode === 39 || keyCode === 40) {
      this.nextSide();
      event.preventDefault();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listeners.keyDown);
  }

  render() {
    const titles = [
      'One', 'Two', 'Three', 'Four', 'Five', 'Six'
    ];
    return (
      <div className = { styles.root }>
        <div className = { styles.header }>
          <dl className = { styles.settings }>
            <dt className = { styles.settingsName }>Rotate</dt>
            <dd className = { styles.settingsData }>
              <button
                className = { styles.buttonRotate }
                onClick   = { this.listeners.prevSide }
              >
                &larr;
              </button>
              <button
                className = { styles.buttonRotate }
                onClick   = { this.listeners.nextSide }
              >
                &rarr;
              </button>
            </dd>
            <dt className = { styles.settingsName }>Sides</dt>
            <dd className = { styles.settingsData }>
              <span className = { styles.settingsVal }>{ this.state.sidesCount }</span>
              <button
                className = { styles.button }
                disabled  = { this.state.sidesCount === this.props.maxSidesCount }
                onClick   = { this.listeners.addSide }
              >
                +
              </button>
              <button
                className = { styles.button }
                disabled  = { this.state.sidesCount === this.props.minSidesCount }
                onClick   = { this.listeners.removeSide }
              >
                -
              </button>
            </dd>

            <dt className = { styles.settingsName }>Zoom</dt>
            <dd className = { styles.settingsData }>
              <span className = { styles.settingsVal }>{ this.state.zoom }</span>
              <button
                className = { styles.button }
                disabled  = { this.state.zoom === this.props.maxZoom }
                onClick   = { this.listeners.zoomIn }
              >
                +
              </button>
              <button
                className = { styles.button }
                disabled  = { this.state.zoom === this.props.minZoom }
                onClick   = { this.listeners.zoomOut }
              >
                -
              </button>
            </dd>

            <dt className = { styles.settingsName }>
              <label>Axis</label>
            </dt>
            <dd className = { styles.settingsData }>
              <span className = { styles.settingsVal }>
                <input
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'X' }
                  checked  = { this.state.axis === 'X' }
                  onChange = { this.listeners.resetAxis }
                />X
              </span>
              <span className = { styles.settingsVal }>
                <input
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'Y' }
                  checked  = { this.state.axis === 'Y' }
                  onChange = { this.listeners.resetAxis }
                />Y
              </span>
            </dd>

            <dt className = { styles.settingsName }>
              <label>Background</label>
            </dt>
            <dd className = { styles.settingsData }>
              <input
                type     = { 'checkbox' }
                checked  = { this.state.back }
                onChange = { this.listeners.resetBack }
              />
            </dd>

            <dt className = { styles.settingsName }>
              <label>Easing</label>
            </dt>
            <dd className = { styles.settingsDataNL }>
              <input
                className = { styles.input }
                onChange  = { this.listeners.resetEasing }
                value     = { this.state.easing }
              />
            </dd>
          </dl>
        </div>
        <div className = { styles[`box${ this.state.zoom }`] }>
          <AnimakitRotator
            axis       = { this.state.axis }
            side       = { this.state.side }
            background = { this.state.back ? '#eee' : null }
            easing     = { this.state.easing }
          >
            { Array.from(Array(this.state.sidesCount), (_, i) => {
              return (
                <div
                  key={ i }
                  className = { styles[`side${ i + 1 }`] }
                >
                  <h1>{ titles[i] }</h1>
                </div>
              );
            }, this)}
          </AnimakitRotator>
        </div>
      </div>
    );
  }
}
