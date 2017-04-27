import React from 'react';
import PropTypes from 'prop-types';

export default class Dotnav extends React.Component {
  constructor(props) {
    super(props);

    this.listeners = {
      setIndex: [],
      onClickPrev: this.onClickPrev.bind(this),
      onClickNext: this.onClickNext.bind(this),
    };
  }

  componentWillMount() {
    const count = this.props.count;
    this.listeners.setIndex = Array.from({ length: count }, (_, i) =>
      this.setIndex.bind(this, i)
    , this);
  }

  onClickPrev() {
    let index = this.props.index;
    index--;
    if (index < 0) index = this.props.count - 1;
    this.props.handleChange(index);
  }

  onClickNext() {
    let index = this.props.index;
    index++;
    if (index > this.props.count - 1) index = 0;
    this.props.handleChange(index);
  }

  setIndex(index) {
    this.props.handleChange(index);
  }

  render() {
    if (this.props.count < 2) return null;

    const { count, classes } = this.props;

    return (
      <div>
        <ul className = { classes.dots }>
          { Array.from({ length: count }, (_, i) => {
            const dotClassName = this.props.index === i ? classes.dotActive : classes.dot;

            return (
              <li
                key = { i }
                className = { dotClassName }
                onClick = { this.listeners.setIndex[i] }
              />
            );
          }, this)}
        </ul>
        { this.props.withArrows && <div
          className = { classes.arrowPrev }
          onClick = { this.listeners.onClickPrev }
        /> }
        { this.props.withArrows && <div
          className = { classes.arrowNext }
          onClick = { this.listeners.onClickNext }
        /> }
      </div>
    );
  }
}

Dotnav.propTypes = {
  withArrows: PropTypes.bool,
  count: PropTypes.number,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  classes: PropTypes.shape({
    dots: PropTypes.string,
    dot: PropTypes.string,
    dotActive: PropTypes.string,
    arrowPrev: PropTypes.string,
    arrowNext: PropTypes.string,
  }),
};

Dotnav.defaultProps = {
  withArrows: false,
  count: 0,
  index: 0,
  classes: {
    dots: 'DotNav-dots',
    dot: 'DotNav-dot',
    dotActive: 'DotNav-dot_active',
    arrowPrev: 'DotNav-arrow_prev',
    arrowNext: 'DotNav-arrow_next',
  },
};
