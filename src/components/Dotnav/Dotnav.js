import React  from 'react';

import styles from './Dotnav.css';

export default class Dotnav extends React.Component {
  static propTypes = {
    count:        React.PropTypes.number,
    vertical:     React.PropTypes.bool,
    colors:       React.PropTypes.array,
    handleChange: React.PropTypes.func,
  };

  state = {
    index:    0,
    vertical: false,
    colors:   [],
  };

  componentWillMount() {
    const count = this.props.count;
    this.listeners.setIndex = [...Array(count)].map((_, i) => this.setIndex.bind(this, i), this);
  }

  setIndex(index) {
    this.setState({ index });
    this.props.handleChange(index);
  }

  listeners = {
    setIndex: [],
  };

  render() {
    const { count, vertical, colors } = this.props;

    return (
      <div className = { styles.root }>
        <ul className = { vertical ? styles.dotsVertical : styles.dotsHorizontal }>
          { [...Array(count)].map((_, i) => {
            const baseClassName = this.state.index === i ? styles.dotActive : styles.dot;
            const colorClassName = colors && colors[i] ? styles[`dotColor${colors[i]}`] : '';

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
