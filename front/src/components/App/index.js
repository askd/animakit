import React        from 'react';
import styles       from './styles.css';
import Rotator      from 'animakit-rotator';
import 'animakit-rotator/dist/styles.css';

export class App extends React.Component {
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
    timingFunc: 'cubic-bezier(.175,.885,.32,1.275)' // 'cubic-bezier(.45,-0.67,.53,1.63)'
  };

  listeners = {
    nextSide:        this.nextSide.bind(this),
    prevSide:        this.prevSide.bind(this),
    addSide:         this.addSide.bind(this),
    removeSide:      this.removeSide.bind(this),
    resetBack:       this.resetBack.bind(this),
    resetAxis:       this.resetAxis.bind(this),
    zoomIn:          this.zoomIn.bind(this),
    zoomOut:         this.zoomOut.bind(this),
    resetTimingFunc: this.resetTimingFunc.bind(this)
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

  resetTimingFunc(event) {
    this.setState({
      timingFunc: event.target.value
    });
  }

  render() {
    console.log(Rotator)
    return (
      <div className = { styles.root }>
        <div className = { styles.header }>
          <div className = { styles.settings }>

            <span className = { styles.settingsItem }>
              Sides: { this.state.sidesCount }
            </span>

            <span className = { styles.settingsItem }>
              Zoom: { this.state.zoom }
            </span>

            <label className = { styles.settingsItem }>
              Background&nbsp;
              <input
                type     = { 'checkbox' }
                checked  = { this.state.back }
                onChange = { this.listeners.resetBack }
              />
            </label>

            <label className = { styles.settingsItem }>
              Axis:&nbsp;
              <span>
                <input
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'X' }
                  checked  = { this.state.axis === 'X' }
                  onChange = { this.listeners.resetAxis }
                />X
              </span>
              &nbsp;
              <span>
                <input
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'Y' }
                  checked  = { this.state.axis === 'Y' }
                  onChange = { this.listeners.resetAxis }
                />Y
              </span>
            </label>

            <label className = { styles.settingsItem }>
              Timing func:&nbsp;
              <input
                className = { styles.timingInput }
                onChange  = { this.listeners.resetTimingFunc }
                value     = { this.state.timingFunc }
              />
            </label>
          </div>
          <p>
            <button
              onClick = { this.listeners.nextSide }
            >
              Next side
            </button>
            <button
              onClick = { this.listeners.prevSide }
            >
              Prev side
            </button>
            <button
              disabled = { this.state.sidesCount === this.props.maxSidesCount }
              onClick  = { this.listeners.addSide }
            >
              Add side
            </button>
            <button
              disabled = { this.state.sidesCount === this.props.minSidesCount }
              onClick  = { this.listeners.removeSide }
            >
              Remove side
            </button>
            <button
              disabled = { this.state.zoom === this.props.maxZoom }
              onClick  = { this.listeners.zoomIn }
            >
              Zoom in
            </button>
            <button
              disabled={ this.state.zoom === this.props.minZoom }
              onClick={ this.listeners.zoomOut }
            >
              Zoom out
            </button>
          </p>
        </div>
        <div className = { styles[`box${ this.state.zoom }`] }>
          <Rotator
            axis       = { this.state.axis }
            side       = { this.state.side }
            background = { this.state.back ? '#eee' : null }
            timingFunc = { this.state.timingFunc }
          >
            { Array.from(Array(this.state.sidesCount), (_, i) => {
              return (
                <div
                  key={ i }
                  className = { styles[`side${ i + 1 }`] }
                >
                  <h1>{ i + 1 }</h1>
                </div>
              );
            }, this)}
          </Rotator>
        </div>
      </div>
    );
  }
}
