import React            from 'react';
import styles           from './ExpanderSimple.css';
import AnimakitExpander from 'animakit-expander';

export class ExpanderSimple extends React.Component {
  static propTypes = {
    handleChangeExpanded: React.PropTypes.func
  };

  state = {
    expanded: false
  };

  listeners = {
    onClick: this.onClick.bind(this)
  };

  toggleExpanded() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    this.props.handleChangeExpanded(expanded);
  }

  onClick() {
    this.toggleExpanded();
  }

  render() {
    return (
      <div className = { styles.root }>
        <header
          className = { styles.header }
          onClick = { this.listeners.onClick }
        >
          <span className = { styles.title }>Hickory Dickory Dock</span>
          <span className = { this.state.expanded ? styles.toggleOff : styles.toggleOn } />
        </header>

        <AnimakitExpander expanded = { this.state.expanded }>
          <article className = { styles.content }>
            <p>Hickory, dickory, dock.</p>
            <p>The mouse ran up the clock.</p>
            <p>The clock struck one,</p>
            <p>The mouse ran down,</p>
            <p>Hickory, dickory, dock.</p>
          </article>
        </AnimakitExpander>
      </div>
    );
  }
}
