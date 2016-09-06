import React                                               from 'react';
import { isEqual, getScrollbarWidth, isPropertySupported } from 'animakit-core';

export default class AnimakitBase extends React.Component {
  static propTypes = {
    children:     React.PropTypes.any,
    duration:     React.PropTypes.number,
    useWinResize: React.PropTypes.bool,
  };

  state = {
    animation:    false,
    duration:     500,
    useWinResize: false,
    winHeight:    0,
  };

  componentWillMount() {
    this.animationResetTO = null;
    this.resizeCheckerRAF = null;

    this.init();

    this.listeners = this.getListeners();
  }

  componentDidMount() {
    const useWinResize = this.props.useWinResize;

    if (useWinResize) this.winResize();

    this.repaint(this.props);

    if (window && useWinResize) {
      window.addEventListener('resize', this.listeners.winResize, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.repaint(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const stateChanged = !isEqual(nextState, this.state);

    const propsChanged = !isEqual(nextProps.children, this.props.children);

    return stateChanged || propsChanged;
  }

  componentWillUpdate() {
    this.cancelResizeChecker();
  }

  componentDidUpdate() {
    this.startResizeChecker();
  }

  componentWillUnmount() {
    const useWinResize = this.props.useWinResize;

    this.cancelResizeChecker();
    this.cancelAnimationReset();

    if (window && useWinResize) {
      window.removeEventListener('resize', this.listeners.winResize, false);
    }
  }

  getListeners() {
    const listeners = {};

    listeners.checkResize = this.checkResize.bind(this);
    if (this.props.useWinResize) {
      listeners.winResize = this.winResize.bind(this);
    }

    return listeners;
  }

  getScrollbarWidth() {
    return getScrollbarWidth();
  }

  get3DSupport() {
    return isPropertySupported('perspective', '1px') &&
           isPropertySupported('transform-style', 'preserve-3d');
  }

  init() {

  }

  winResize() {
    this.setState({
      winHeight: window ? window.innerHeight : 800,
    });
  }

  startResizeChecker() {
    if (typeof requestAnimationFrame === 'undefined') return;
    this.resizeCheckerRAF = requestAnimationFrame(this.listeners.checkResize);
  }

  cancelResizeChecker() {
    if (typeof requestAnimationFrame === 'undefined') return;
    if (this.resizeCheckerRAF) cancelAnimationFrame(this.resizeCheckerRAF);
  }

  startAnimationReset() {
    this.animationResetTO = setTimeout(() => {
      this.setState({
        animation: false,
      });
    }, this.props.duration);
  }

  cancelAnimationReset() {
    if (this.animationResetTO) clearTimeout(this.animationResetTO);
  }

  checkResize() {
    this.cancelResizeChecker();

    if (this.softRepaint) {
      this.softRepaint();
    } else {
      this.repaint(this.props);
    }

    this.startResizeChecker();
  }

  repaint(/* nextProps */) {
    const state = {};

    this.applyState(state);
  }

  applyState(state) {
    if (!Object.keys(state).length) return;

    if (state.animation) {
      this.cancelAnimationReset();
    }

    this.setState(state);

    if (state.animation) {
      this.startAnimationReset();
    }
  }
}
