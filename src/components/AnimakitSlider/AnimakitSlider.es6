import React       from 'react';
import { isEqual } from 'animakit-core';

export default class AnimakitSlider extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    slide:    React.PropTypes.any,
    duration: React.PropTypes.number,
    easing:   React.PropTypes.string,
  };

  static defaultProps = {
    duration: 500,
    easing:   'cubic-bezier(.165,.84,.44,1)',
  };

  state = {
    animation:    false,
    currentSlide: 0,
    slidesCount:  0,
  };

  componentWillMount() {

  }

  componentDidMount() {
    this.repaint(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.repaint(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const stateChanged = !isEqual(nextState, this.state);

    const propsChanged = !isEqual(nextProps.children, this.props.children);

    return stateChanged || propsChanged;
  }

  getChildrenCount(children) {
    const length = Array.isArray(children) ? children.length : 1;

    if (length > 1) return length;

    return children ? 1 : 0;
  }

  getRootStyles() {
    if (!this.props.children) return {};

    const overflow = 'hidden';

    return { overflow };
  }

  getContainerStyles() {
    if (!this.props.children) return {};

    const { currentSlide, slidesCount } = this.state;

    const transform = `translateX(${currentSlide * (-100 / slidesCount)}%)`;
    const width = `${slidesCount * 100}%`;

    if (!this.state.animation) {
      return { transform, width };
    }

    const { duration, easing } = this.props;
    const transition = `transform ${duration}ms ${easing}`;

    return { transition, transform, width };
  }

  getSideStyles(isHidden) {
    const float = 'left';
    const width = `${100 / this.state.slidesCount}%`;

    if (!isHidden) {
      return { float, width };
    }

    const minHeight = '1px';

    return { float, width, minHeight };
  }

  getSlideNum(slideKey) {
    let slideNum = slideKey;

    React.Children.forEach(this.props.children, (child, num) => {
      if (child.key === slideKey) slideNum = num;
    });

    return slideNum;
  }

  startAnimationReset() {
    this.animationResetTO = setTimeout(() => {
      this.setState({
        animation: false,
      });
    }, this.props.duration + 1);
  }

  cancelAnimationReset() {
    if (this.animationResetTO) clearTimeout(this.animationResetTO);
  }

  resetSlidesCountState(stateChunk) {
    const { slidesCount } = stateChunk;

    if (slidesCount === this.state.slidesCount) return {};

    return stateChunk;
  }

  resetCurrentSlideState(stateChunk) {
    const { currentSlide } = stateChunk;
    const prevSlide = this.state.currentSlide;

    if (currentSlide === prevSlide) return {};

    const animation = true;

    return { currentSlide, animation };
  }

  repaint(props) {
    const slidesCount = this.getChildrenCount(props.children);

    const nextSlide    = this.getSlideNum(props.slide);
    const currentSlide = nextSlide < slidesCount ? nextSlide : slidesCount - 1;

    const state = Object.assign(
      {},
      this.resetSlidesCountState({ slidesCount }),
      this.resetCurrentSlideState({ currentSlide }),
    );

    if (!Object.keys(state).length) return;

    if (state.animation) {
      this.cancelAnimationReset();
    }

    this.setState(state);

    if (state.animation) {
      this.startAnimationReset();
    }
  }

  renderChild(child, num) {
    const isHidden = (!this.state.animation && this.state.currentSlide !== num);

    return (
      <div style = { this.getSideStyles(isHidden) }>
        { isHidden ? null : child }
      </div>
    );
  }

  render() {
    return (
      <div style = { this.getRootStyles() }>
        <div
          style = { this.getContainerStyles() }
          ref = {(c) => { this.container = c; }}
        >
        { React.Children.map(this.props.children, (child, num) => this.renderChild(child, num)) }
        </div>
      </div>
    );
  }
}
