import React  from 'react';

import styles from './Dotnav.css';

export default class Dotnav extends React.Component {
  static propTypes = {
    count:        React.PropTypes.number,
    index:        React.PropTypes.number,
    vertical:     React.PropTypes.bool,
    colors:       React.PropTypes.array,
    handleChange: React.PropTypes.func,
  };

  static defaultProps = {
    count:    0,
    index:    0,
    vertical: false,
    colors:   [],
  };

  componentWillMount() {
    const count = this.props.count;
    this.listeners.setIndex = [...Array(count)].map((_, i) => this.setIndex.bind(this, i), this);
  }

  setIndex(index) {
    this.props.handleChange(index);
  }

  listeners = {
    setIndex: [],
  };

  render() {
    if (this.props.count < 2) return null;

    const { count, vertical, colors } = this.props;

    return (
      <div className = { styles.root }>
        <ul className = { vertical ? styles.dotsVertical : styles.dotsHorizontal }>
          { [...Array(count)].map((_, i) => {
            const baseClassName = this.props.index === i ? styles.dotActive : styles.dot;
            let colorClassName = '';
            if (colors) {
              colorClassName = styles[`dotColor${colors[colors[i] ? i : 0]}`];
            }

            return (
              <li
                key = { i }
                className = { `${baseClassName} ${colorClassName}` }
                onClick = { this.listeners.setIndex[i] }
              />
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
