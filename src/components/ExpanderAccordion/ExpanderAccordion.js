import AnimakitExpander from 'components/AnimakitExpander';

import React from 'react';
import PropTypes from 'prop-types';

import pathToImage from 'utils/path-to-image';

import styles from './ExpanderAccordion.css';

export default class ExpanderAccordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: {
        mars: false,
        earth: false,
        venus: false,
        mercury: false,
      },
    };

    this.listeners = {
      onClick: {},
    };
  }

  componentWillMount() {
    this.props.items.forEach(item => {
      this.listeners.onClick[item] = this.onClick.bind(this, item);
    }, this);
  }

  onClick(name) {
    this.toggleExpanded(name);
  }

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
                  src = { pathToImage(item) }
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

ExpanderAccordion.propTypes = {
  items: PropTypes.array,
  handleChangeExpanded: PropTypes.func,
};

ExpanderAccordion.defaultProps = {
  items: ['mars', 'earth', 'venus', 'mercury'],
};
