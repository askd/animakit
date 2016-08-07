import React             from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist }    from 'react-syntax-highlighter/dist/styles';

export default class GithubHighlighter extends React.PureComponent {
  static propTypes = {
    className: React.PropTypes.string,
    language:  React.PropTypes.string,
    children:  React.PropTypes.any,
  };

  static defaultProps = {
    language: 'xml',
  };

  render() {
    githubGist.hljs = {};

    return (
      <SyntaxHighlighter
        language   = { this.props.language }
        style      = { githubGist }
        className  = { this.props.className }
      >
        { this.props.children }
      </SyntaxHighlighter>
    );
  }
}
