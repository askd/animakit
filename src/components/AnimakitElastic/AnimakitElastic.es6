import React           from 'react';
import { findDOMNode } from 'react-dom';
import { isEqual }     from 'animakit-core';

export default class AnimakitElastic extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    duration: React.PropTypes.number,
    easing:   React.PropTypes.string
  };

  static defaultProps = {
    duration: 500,
    easing:   'ease-out'
  };

  state = {
    width:  0,
    height: 0
  };

  contentNode      = null;
  resizeCheckerRAF = null;

  componentDidMount() {
    this.contentNode = findDOMNode(this.refs.content);

    this.repaint(this.props);
  }

  componentWillReceiveProps() {
    this.repaint();
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
    this.cancelResizeChecker();
  }

  startResizeChecker() {
    if (typeof requestAnimationFrame === 'undefined') return;
    this.resizeCheckerRAF = requestAnimationFrame(this.checkResize.bind(this));
  }

  cancelResizeChecker() {
    if (typeof requestAnimationFrame === 'undefined') return;
    if (this.resizeCheckerRAF) cancelAnimationFrame(this.resizeCheckerRAF);
  }

  calcDimensions() {
    const width  = this.contentNode.offsetWidth;
    const height = this.contentNode.offsetHeight;

    return [width, height];
  }

  resetDimensionsState(stateChunk) {
    const { width, height } = stateChunk;

    if (
      width === this.state.width &&
      height === this.state.height
    ) return {};

    return stateChunk;
  }

  checkResize() {
    this.cancelResizeChecker();

    this.repaint();

    this.startResizeChecker();
  }

  repaint() {
    const [width, height] = this.calcDimensions();

    const state = this.resetDimensionsState({ width, height });

    if (Object.keys(state).length) this.setState(state);
  }

  getWrapperStyles() {
    const position = 'relative';
    const overflow = 'hidden';

    const width = this.state.width ? `${ this.state.width }px` : 'auto';
    const height = this.state.height ? `${ this.state.height }px` : 'auto';

    const { duration, easing } = this.props;
    const transition = `width ${ duration }ms ${ easing }, height ${ duration }ms ${ easing }`;

    return { position, overflow, width, height, transition };
  }

  getContainerStyles() {
    const position = 'absolute';

    const width = `${ window.innerWidth }px`;
    const height = `${ window.innerHeight }px`;

    return { position, width, height };
  }

  getContentStyles() {
    const position = 'absolute';

    return { position };
  }

  render() {
    return (
      <div>
        <div style = { this.getWrapperStyles() }>
          <div style = { this.getContainerStyles() }>
            <div
              style = { this.getContentStyles() }
              ref = "content"
            >
              <span style = {{ display: 'table', height: 0 }}></span>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
