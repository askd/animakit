import AnimakitRotator from 'components/AnimakitRotator';

import React           from 'react';
import styles          from './RotatorFull.css';

export default class RotatorFull extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      axis:       'X',
      side:       0,
      sidesCount: 2,
      zoom:       1,
      back:       true,
      shadow:     true,
      duration:   1000,
      durationIn: 1000,
      easing:     'cubic-bezier(.175,.885,.32,1.275)', // 'cubic-bezier(.45,-0.67,.53,1.63)',
    };

    this.isKeyDownInput = false;

    this.listeners = {
      nextSide:      this.nextSide.bind(this),
      prevSide:      this.prevSide.bind(this),
      addSide:       this.addSide.bind(this),
      removeSide:    this.removeSide.bind(this),
      setBack:       this.setBack.bind(this),
      setShadow:     this.setShadow.bind(this),
      setAxis:       this.setAxis.bind(this),
      zoomIn:        this.zoomIn.bind(this),
      zoomOut:       this.zoomOut.bind(this),
      setDuration:   this.setDuration.bind(this),
      resetDuration: this.resetDuration.bind(this),
      setEasing:     this.setEasing.bind(this),
      keyDown:       this.keyDown.bind(this),
      keyDownInput:  this.keyDownInput.bind(this),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listeners.keyDown);
  }

  setBack() {
    this.setState({
      back: !this.state.back,
    });
  }

  setShadow() {
    this.setState({
      shadow: !this.state.shadow,
    });
  }

  setAxis(event) {
    this.setState({
      axis: event.target.value,
    });
  }

  setDuration(event) {
    const durationIn = parseInt(event.target.value, 10);

    this.setState({
      duration: durationIn || this.state.duration,
      durationIn,
    });
  }

  setEasing(event) {
    this.setState({
      easing: event.target.value,
    });
  }

  resetDuration() {
    if (!this.state.durationIn) {
      this.setState({
        durationIn: this.state.duration,
      });
    }
  }

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

  keyDown(event) {
    if (this.isKeyDownInput) {
      this.isKeyDownInput = false;
      return;
    }

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

  keyDownInput() {
    this.isKeyDownInput = true;
  }

  render() {
    const titles = [
      'One', 'Two', 'Three', 'Four', 'Five', 'Six',
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
              <label htmlFor="s-axis">Axis</label>
            </dt>
            <dd className = { styles.settingsData }>
              <span className = { styles.settingsVal }>
                <input
                  id       = "s-axis"
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'X' }
                  checked  = { this.state.axis === 'X' }
                  onChange = { this.listeners.setAxis }
                />X
              </span>
              <span className = { styles.settingsVal }>
                <input
                  type     = { 'radio' }
                  name     = { 'axis' }
                  value    = { 'Y' }
                  checked  = { this.state.axis === 'Y' }
                  onChange = { this.listeners.setAxis }
                />Y
              </span>
            </dd>

            <dt className = { styles.settingsName }>
              <label htmlFor="s-back">Background</label>
            </dt>
            <dd className = { styles.settingsData }>
              <input
                id       = "s-back"
                type     = { 'checkbox' }
                checked  = { this.state.back }
                onChange = { this.listeners.setBack }
              />
            </dd>

            <dt className = { styles.settingsName }>
              <label htmlFor="s-shadow">Shadow</label>
            </dt>
            <dd className = { styles.settingsData }>
              <input
                id       = "s-shadow"
                type     = { 'checkbox' }
                checked  = { this.state.shadow }
                onChange = { this.listeners.setShadow }
              />
            </dd>

            <dt className = { styles.settingsName }>
              <label htmlFor="s-dur">Duration</label>
            </dt>
            <dd className = { styles.settingsData }>
              <input
                id        = "s-dur"
                type      = { 'number' }
                className = { styles.inputNumber }
                onChange  = { this.listeners.setDuration }
                onBlur    = { this.listeners.resetDuration }
                onKeyDown = { this.listeners.keyDownInput }
                value     = { this.state.durationIn }
              />
            </dd>

            <dt className = { styles.settingsName }>
              <label htmlFor="s-easing">Easing</label>
            </dt>
            <dd className = { styles.settingsDataNL }>
              <input
                id        = "s-easing"
                type      = { 'text' }
                className = { styles.input }
                onChange  = { this.listeners.setEasing }
                onKeyDown = { this.listeners.keyDownInput }
                value     = { this.state.easing }
              />
            </dd>
          </dl>
        </div>
        <div className = { styles[`box${this.state.zoom}`] }>
          <AnimakitRotator
            axis       = { this.state.axis }
            side       = { this.state.side }
            background = { this.state.back ? '#fff' : null }
            shadow     = { this.state.shadow }
            duration   = { this.state.duration }
            easing     = { this.state.easing }
          >
            { Array.from(Array(this.state.sidesCount), (_, i) =>
              <div
                key={ i }
                className = { styles[`side${i + 1}`] }
              >
                <h1>{ titles[i] }</h1>
              </div>
            , this)}
          </AnimakitRotator>
        </div>
      </div>
    );
  }
}

RotatorFull.propTypes = {
  minSidesCount: React.PropTypes.number,
  maxSidesCount: React.PropTypes.number,
  minZoom:       React.PropTypes.number,
  maxZoom:       React.PropTypes.number,
};

RotatorFull.defaultProps = {
  minSidesCount: 2,
  maxSidesCount: 6,
  minZoom:       1,
  maxZoom:       3,
};
