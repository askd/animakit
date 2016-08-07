import React             from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist }    from 'react-syntax-highlighter/dist/styles';

export default class GithubHighlighter extends React.PureComponent {
  static propTypes = {
    className: React.PropTypes.string,
    children:  React.PropTypes.any,
  };

  render() {
    githubGist.hljs = {};

    return (
      <SyntaxHighlighter
        language   = "xml"
        style      = { githubGist }
        className  = { this.props.className }
      >
        { this.props.children }
      </SyntaxHighlighter>
    );
  }
}
