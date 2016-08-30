import React       from 'react';
import { isEqual } from 'animakit-core';
import styles      from './styles';

export default class AnimakitSlider extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    slide:    React.PropTypes.any,
    vertical: React.PropTypes.bool,
    loop:     React.PropTypes.bool,
    skip:     React.PropTypes.bool,
    flexible: React.PropTypes.bool,
    duration: React.PropTypes.number,
    easing:   React.PropTypes.string,
  };

  static defaultProps = {
    side:     0,
    vertical: false,
    loop:     false,
    skip:     false,
    flexible: false,
    duration: 500,
    easing:   'cubic-bezier(.165,.84,.44,1)',
  };

  state = {
    animation:    false,
    prevSlide:    -1,
    currentSlide: 0,
    slidesCount:  0,
    width:        null,
    height:       null,
  };

  componentWillMount() {
    this.init();
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

  componentWillUpdate() {
    this.cancelResizeChecker();
  }

  componentDidUpdate() {
    this.startResizeChecker();
  }

  componentWillUnmount() {
    this.cancelResizeChecker();
    this.cancelAnimationReset();
  }

  getChildrenCount(children) {
    const length = Array.isArray(children) ? children.length : 1;

    if (length > 1) return length;

    return children ? 1 : 0;
  }

  getOffset() {
    const { currentSlide, prevSlide, slidesCount, animation } = this.state;
    const { loop, skip } = this.props;

    const useLoop = (loop || skip) && slidesCount > 2;
    if (!useLoop) return 0;

    return Math.ceil(slidesCount / 2) - (animation ? prevSlide : currentSlide) - 1;
  }

  getSlideNum(slideKey) {
    let slideNum = slideKey;

    React.Children.forEach(this.props.children, (child, num) => {
      if (child.key === slideKey) slideNum = num;
    });

    return slideNum;
  }

  getDirection() {
    const { currentSlide, prevSlide, slidesCount } = this.state;
    const { loop, skip } = this.props;

    let direction = prevSlide < currentSlide;

    if (!loop && !skip) {
      return direction;
    }

    if (skip) {
      if (prevSlide === slidesCount - 1 && currentSlide === 0) direction = true;
      if (prevSlide === 0 && currentSlide === slidesCount - 1) direction = false;

      return direction;
    }

    // TODO check loop

    return direction;
  }

  getSlideVisibility(num) {
    if (!this.props.skip) return true;

    const { currentSlide, prevSlide, animation } = this.state;

    if ((num === currentSlide) || (animation && num === prevSlide)) {
      return true;
    }

    return false;
  }

  getChildVisibility(num) {
    const { currentSlide, prevSlide, animation } = this.state;

    if (!animation) {
      return num === currentSlide;
    }

    if (this.props.skip) {
      return num === currentSlide || num === prevSlide;
    }

    // TODO calculate visible slides indexes
    const direction = this.getDirection();

    return true;
  }

  getRootStyles() {
    if (!this.props.children) return {};

    const position = 'relative';
    const overflow = 'hidden';

    let { width, height } = this.state;

    if (!this.props.flexible) {
      return { position, width, height, overflow };
    }

    width = 0;
    height = 0;

    const num = this.state.animation ? this.state.prevSlide : this.state.currentSlide;

    if (this.slidesDimensions[num]) {
      width  = this.slidesDimensions[num].width;
      height = this.slidesDimensions[num].height;
    }

    const { duration, easing } = this.props;

    if (!this.contentMounted) {
      return { position, width, height, overflow };
    }

    const transition = `width ${duration}ms ${easing}, height ${duration}ms ${easing}`;

    return { position, width, height, transition, overflow };
  }

  getContainerStyles() {
    if (!this.props.children) return {};

    const { vertical, loop, skip } = this.props;
    const { currentSlide, slidesCount, animation } = this.state;

    const axis = vertical ? 'Y' : 'X';

    let count = slidesCount;
    let index = currentSlide;

    if (skip) {
      count = 3;
      index = 1;

      if (animation) {
        const direction = this.getDirection();
        index = direction ? 2 : 0;
      }
    } else if (loop) {
      const offset = this.getOffset();
      index = currentSlide + offset;

      if (index < 0) index += slidesCount;
      if (index >= slidesCount) index -= slidesCount;
    }

    const position = 'absolute';
    const transform = `translate${axis}(${index * (-100 / count)}%)`;

    const size = count * 100;
    const width = vertical ? '100%' : `${size}%`;
    const height = vertical ? `${size}%` : '100%';

    if (!animation) {
      return { position, transform, width, height };
    }

    const { duration, easing } = this.props;
    const transition = `transform ${duration}ms ${easing}`;

    return { position, transition, transform, width, height };
  }

  getSlideStyles(num) {
    const { vertical, skip } = this.props;
    const { prevSlide, slidesCount, animation } = this.state;

    const position = 'relative';

    const count = skip ? 3 : slidesCount;

    const size = 100 / count;
    const width = vertical ? '100%' : `${size}%`;
    const height = vertical ? `${size}%` : '100%';

    const direction = this.getDirection();

    const appendMargin = skip && (!animation || (direction && num === prevSlide));

    if (vertical) {
      if (appendMargin) {
        const marginTop = `${size}%`;
        return { position, width, height, marginTop };
      }

      return { position, width, height };
    }

    const float = 'left';

    if (appendMargin) {
      const marginLeft = `${size}%`;
      return { position, float, width, height, marginLeft };
    }

    return { position, float, width, height };
  }

  init() {
    this.slidesNodes      = [];
    this.slidesDimensions = [];

    this.animationResetTO = null;
    this.resizeCheckerRAF = null;

    this.contentMounted = false;

    this.listeners = {
      checkResize: this.checkResize.bind(this),
    };
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
    }, this.props.duration + 1);
  }

  cancelAnimationReset() {
    if (this.animationResetTO) clearTimeout(this.animationResetTO);
  }

  calcDimensions() {
    let maxWidth  = 0;
    let maxHeight = 0;

    React.Children.map(this.props.children, (child, num) => {
      let width  = 0;
      let height = 0;

      if (this.slidesDimensions[num]) {
        width  = this.slidesDimensions[num].width;
        height = this.slidesDimensions[num].height;
      }

      if (this.getChildVisibility(num)) {
        const node = this.slidesNodes[num];

        if (node) {
          width  = node.offsetWidth;
          height = node.offsetHeight;
        }

        this.slidesDimensions[num] = { width, height };
      }

      if (width > maxWidth)   maxWidth  = width;
      if (height > maxHeight) maxHeight = height;
    });

    return [maxWidth, maxHeight];
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

    return { currentSlide, prevSlide, animation };
  }

  resetDimensionsState(stateChunk) {
    const { width, height } = stateChunk;

    if (width  === this.state.width &&
        height === this.state.height) {
      return {};
    }

    return stateChunk;
  }

  checkResize() {
    this.cancelResizeChecker();

    const [width, height] = this.calcDimensions();

    const state = this.resetDimensionsState({ width, height });

    if (Object.keys(state).length) this.setState(state);

    this.startResizeChecker();
  }

  repaint(props) {
    const slidesCount = this.getChildrenCount(props.children);

    const [width, height] = this.calcDimensions();
    const nextSlide       = this.getSlideNum(props.slide);
    const currentSlide    = nextSlide < slidesCount ? nextSlide : slidesCount - 1;

    const state = Object.assign(
      {},
      this.resetDimensionsState({ width, height }),
      this.resetSlidesCountState({ slidesCount }),
      this.resetCurrentSlideState({ currentSlide, slidesCount }),
    );

    if (this.state.width !== null) {
      setTimeout(() => {
        this.contentMounted = true;
      }, 1);
    }

    if (!Object.keys(state).length) return;

    if (state.animation) {
      this.cancelAnimationReset();
    }

    this.setState(state);

    if (state.animation) {
      this.startAnimationReset();
    }
  }

  renderChild(num, child) {
    const slideVisible = this.getSlideVisibility(num);

    return (
      <div
        key = { num }
        style = { slideVisible ? this.getSlideStyles(num) : null }
      >
        <div
          style = { slideVisible ? styles.slideWrapper : null }
          ref = { (c) => { this.slidesNodes[num] = c; } }
        >
          { this.getChildVisibility(num) ? child : null }
        </div>
      </div>
    );
  }

  renderChildren() {
    const children = React.Children.map(this.props.children, (child, num) => {
      const item = { child, num };
      return item;
    });

    const { loop, skip } = this.props;

    if (loop || skip) {
      const offset = this.getOffset();

      if (offset) {
        if (offset > 0) {
          for (let i = 0; i < offset; i++) {
            const lastChild = children.pop();
            children.unshift(lastChild);
          }
        }
        if (offset < 0) {
          for (let i = 0; i > offset; i--) {
            const firstChild = children.shift();
            children.push(firstChild);
          }
        }
      }
    }

    return children.map(item => {
      const { child, num } = item;

      return this.renderChild(num, child);
    });
  }

  render() {
    return (
      <div style = { this.getRootStyles() }>
        <div
          style = { this.getContainerStyles() }
          ref = {(c) => { this.container = c; }}
        >
        { this.renderChildren() }
        </div>
      </div>
    );
  }
}
