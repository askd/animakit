import AnimakitExpander from 'components/AnimakitExpander';

import React            from 'react';
import SimpleText       from 'components/SimpleText/SimpleText';

import styles           from './ExpanderSimple.css';

export default class ExpanderSimple extends React.Component {
  static propTypes = {
    handleChangeExpanded: React.PropTypes.func,
  };

  state = {
    show:     true,
    expanded: false,
  };

  componentDidMount() {
    /* setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 5000); */
  }

  onClick() {
    this.toggleExpanded();
  }

  listeners = {
    onClick: this.onClick.bind(this),
  };

  toggleExpanded() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  render() {
    return (
      <div className = { styles.root }>
        <div
          className = { styles.header }
          onClick = { this.listeners.onClick }
        >
          <span className = { styles.title }>{ this.state.expanded ? 'Hide lyrics' : 'Show lyrics' }</span>
          <span className = { this.state.expanded ? styles.toggleOff : styles.toggleOn } />
        </div>

        <AnimakitExpander expanded = { this.state.expanded }>
          { this.state.show && <SimpleText
            className     = { styles.content }
            hasMore       = { false }
          /> }
        </AnimakitExpander>
      </div>
    );
  }
}
