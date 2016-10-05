import React  from 'react';

export default class Dotnav extends React.Component {
  static propTypes = {
    withArrows:   React.PropTypes.bool,
    count:        React.PropTypes.number,
    index:        React.PropTypes.number,
    handleChange: React.PropTypes.func,
    classes:      React.PropTypes.shape({
      dots:      React.PropTypes.string,
      dot:       React.PropTypes.string,
      dotActive: React.PropTypes.string,
      arrowPrev: React.PropTypes.string,
      arrowNext: React.PropTypes.string,
    }),
  };

  static defaultProps = {
    withArrows: false,
    count:      0,
    index:      0,
    classes:    {
      dots:      'DotNav-dots',
      dot:       'DotNav-dot',
      dotActive: 'DotNav-dot_active',
      arrowPrev: 'DotNav-arrow_prev',
      arrowNext: 'DotNav-arrow_next',
    },
  };

  componentWillMount() {
    const count = this.props.count;
    this.listeners.setIndex = [...Array(count)].map((_, i) => this.setIndex.bind(this, i), this);
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

  listeners = {
    setIndex:    [],
    onClickPrev: this.onClickPrev.bind(this),
    onClickNext: this.onClickNext.bind(this),
  };

  render() {
    if (this.props.count < 2) return null;

    const { count, classes } = this.props;

    return (
      <div>
        <ul className = { classes.dots }>
          { [...Array(count)].map((_, i) => {
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
