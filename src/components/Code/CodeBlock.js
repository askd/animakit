import React from 'react';
import PropTypes from 'prop-types';
import GithubHighlighter from 'components/GithubHighlighter/GithubHighlighter';

import styles from './Code.css';

export default class CodeBlock extends React.PureComponent {
  render() {
    if (this.props.highlight) {
      let className = styles.blockHightlight;
      if (this.props.blink) {
        className = this.props.blinkActive ? styles.blockBlinkActive : styles.blockBlink;
      }
      return (
        <GithubHighlighter
          className = { className }
          language = { this.props.language }
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

CodeBlock.propTypes = {
  highlight: PropTypes.bool,
  language: PropTypes.string,
  blink: PropTypes.bool,
  blinkActive: PropTypes.bool,
  children: PropTypes.any,
};

CodeBlock.defaultProps = {
  language: 'xml',
};
