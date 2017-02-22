import React                                   from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';

import javascript                              from 'highlight.js/lib/languages/javascript';
import xml                                     from 'highlight.js/lib/languages/xml';
import githubGist                              from 'react-syntax-highlighter/dist/styles/github-gist';

registerLanguage('javascript', javascript);
registerLanguage('xml', xml);

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
    const color1 = '#e74c3c';
    // const color2 = '#e67e22';
    // const color3 = '#f1c40f';
    const color4 = '#27ae60';
    // const color5 = '#2980b9';
    const color6 = '#8e44ad';

    githubGist.hljs = {};
    githubGist['hljs-name'].color = color4;
    githubGist['hljs-section'].color = color4;

    githubGist['hljs-string'].color = color1;
    githubGist['hljs-variable'].color = color1;
    githubGist['hljs-template-variable'].color = color1;
    githubGist['hljs-strong'].color = color1;
    githubGist['hljs-emphasis'].color = color1;
    githubGist['hljs-quote'].color = color1;

    githubGist['hljs-title'].color = color6;
    githubGist['hljs-attr'].color = color6;
    githubGist['hljs-selector-id'].color = color6;
    githubGist['hljs-selector-class'].color = color6;
    githubGist['hljs-selector-attr'].color = color6;
    githubGist['hljs-selector-pseudo'].color = color6;

    githubGist['hljs-keyword'].color = color6;
    githubGist['hljs-selector-tag'].color = color6;
    githubGist['hljs-type'].color = color6;

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
