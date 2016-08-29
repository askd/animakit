import AnimakitExpander from 'animakit-expander';

import React            from 'react';

import styles           from './ExpanderAccordion.css';

export default class ExpanderAccordion extends React.Component {
  static propTypes = {
    items:                React.PropTypes.array,
    handleChangeExpanded: React.PropTypes.func,
  };

  static defaultProps = {
    items: ['mars', 'earth', 'venus', 'mercury'],
  };

  state = {
    expanded: {
      mars:    false,
      earth:   false,
      venus:   false,
      mercury: false,
    },
  };

  componentWillMount() {
    this.props.items.forEach(item => {
      this.listeners.onClick[item] = this.onClick.bind(this, item);
    }, this);
  }

  onClick(name) {
    this.toggleExpanded(name);
  }

  listeners = {
    onClick: {},
  };

  toggleExpanded(name) {
    const expanded = { ...this.state.expanded };
    if (expanded[name]) {
      expanded[name] = false;
    } else {
      Object.keys(expanded).forEach(key => {
        expanded[key] = key === name;
      });
    }
    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  render() {
    return (
      <div className = { styles.root }>
        { this.props.items.map(item => {
          const itemName = item.charAt(0).toUpperCase() + item.slice(1);
          const itemExpanded = this.state.expanded[item];

          const className = styles[`item${itemName}`];
          const modExpanded = itemExpanded ? styles.itemExpanded : styles.itemCollapsed;

          return (
            <div
              key = { item }
              className = { `${className} ${modExpanded}` }
            >
              <div
                key = { `${item}Header ` }
                className = { styles.header }
                onClick = { this.listeners.onClick[item] }
              >
                { itemName }
              </div>
              <AnimakitExpander
                key = { `${item}Content ` }
                expanded = { this.state.expanded[item] }
                duration = { 1000 }
              >
                <img
                  className = { itemExpanded ? styles.imageExpanded : styles.imageCollapsed }
                  src = { `assets/${item}.jpg` }
                  alt=""
                />
              </AnimakitExpander>
            </div>
          );
        }, this)}
      </div>
    );
  }
}
