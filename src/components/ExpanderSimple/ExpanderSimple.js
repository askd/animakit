// import AnimakitExpander from 'animakit-expander';
import AnimakitExpander from 'components/AnimakitExpander/AnimakitExpander';

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
    showMore: false,
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

  onToggleText() {
    const showMore = !this.state.showMore;
    this.setState({ showMore });
  }

  listeners = {
    onClick:      this.onClick.bind(this),
    onToggleText: this.onToggleText.bind(this),
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

        <AnimakitExpander expanded = { this.state.expanded } durationPerPx = { 3 }>
          { this.state.show && <SimpleText
            className     = { styles.content }
            handleToggle  = { this.listeners.onToggleText }
            showMore      = { this.state.showMore }
          /> }
        </AnimakitExpander>
      </div>
    );
  }
}
