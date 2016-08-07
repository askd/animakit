import GithubHighlighter from 'components/GithubHighlighter/GithubHighlighter';

import React             from 'react';

import styles            from './Code.css';

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    highlight:   React.PropTypes.bool,
    language:    React.PropTypes.string,
    blink:       React.PropTypes.bool,
    blinkActive: React.PropTypes.bool,
    children:    React.PropTypes.any,
  };

  static defaultProps = {
    language: 'xml',
  };

  render() {
    if (this.props.highlight) {
      let className = styles.blockHightlight;
      if (this.props.blink) {
        className = this.props.blinkActive ? styles.blockBlinkActive : styles.blockBlink;
      }
      return (
        <GithubHighlighter
          className = { className }
          language  = { this.props.language }
        >
          { this.props.children }
        </GithubHighlighter>
      );
    }

    return (
      <pre className = { styles.block }>
        <code>
          { this.props.children }
        </code>
      </pre>
    );
  }
}
