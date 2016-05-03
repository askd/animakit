import React            from 'react';
import styles           from './ExpanderAccordion.css';
import AnimakitExpander from 'animakit-expander';

export class ExpanderAccordion extends React.Component {
  static propTypes = {
    items:                React.PropTypes.array,
    handleChangeExpanded: React.PropTypes.func
  };

  static defaultProps = {
    items: ['mars', 'earth', 'venus', 'mercury']
  };

  state = {
    expanded: {
      mars:    false,
      earth:   false,
      venus:   false,
      mercury: false
    }
  };

  listeners = {
    onClick: {}
  };

  componentWillMount() {
    this.props.items.forEach(item => {
      this.listeners.onClick[item] = this.onClick.bind(this, item);
    }, this);
  }

  toggleExpanded(name) {
    const expanded = this.state.expanded;
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

  onClick(name) {
    this.toggleExpanded(name);
  }

  render() {
    return (
      <div className = { styles.root }>
        { this.props.items.map(item => {
          const itemName = item.charAt(0).toUpperCase() + item.slice(1);
          let className = styles[`item${ itemName }`];
          if (this.state.expanded[item]) className += ` ${ styles.expanded }`;
          return (
            <div
              key = { item }
              className = { className }
            >
              <div
                key = { `${ item }Header ` }
                className = { styles.header }
                onClick = { this.listeners.onClick[item] }
              >
                { itemName }
              </div>
              <AnimakitExpander
                key = { `${ item }Content ` }
                expanded = { this.state.expanded[item] }
                duration = { 1000 }
              >
                <img
                  className = { styles.image }
                  src = { `assets/${ item }.jpg` }
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
