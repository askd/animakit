import AnimakitExpander from 'components/AnimakitExpander';

import React            from 'react';
import SimpleText       from 'components/SimpleText/SimpleText';

import styles           from './ExpanderSmooth.css';

export default class ExpanderSmooth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show:     true,
      expanded: true,
      showMore: false,
    };

    this.listeners = {
      onClick:      this.onClick.bind(this),
      onToggleText: this.onToggleText.bind(this),
    };
  }

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

        <AnimakitExpander expanded = { this.state.expanded } smoothResize durationPerPx = { 3 }>
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

ExpanderSmooth.propTypes = {
  handleChangeExpanded: React.PropTypes.func,
};
