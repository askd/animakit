import React            from 'react';
import styles           from './ExpanderSimple.css';
import { SimpleText }   from 'components/SimpleText/SimpleText';
import AnimakitExpander from 'animakit-expander';

export class ExpanderSimple extends React.Component {
  static propTypes = {
    handleChangeExpanded: React.PropTypes.func
  };

  state = {
    expanded: false,
    showMore: false
  };

  listeners = {
    onClick:      this.onClick.bind(this),
    onToggleText: this.onToggleText.bind(this)
  };

  toggleExpanded() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  onClick() {
    this.toggleExpanded();
  }

  onToggleText() {
    const showMore = !this.state.showMore;
    this.setState({ showMore });
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
          <SimpleText
            className     = { styles.content }
            handleToggle  = { this.listeners.onToggleText }
            showMore      = { this.state.showMore }
          />
        </AnimakitExpander>
      </div>
    );
  }
}
