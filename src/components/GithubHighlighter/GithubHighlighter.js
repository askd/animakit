import React                                   from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';

import javascript                              from 'highlight.js/lib/languages/javascript';
import xml                                     from 'highlight.js/lib/languages/xml';
import githubGist                              from 'react-syntax-highlighter/dist/styles/github-gist';

registerLanguage('javascript', javascript);
registerLanguage('xml', xml);

const GithubHighlighter = (props) => {
  // const colorRedOrange = '#e74c3c';
  // const colorGreen = '#27ae60';
  // const colorBlueViolet = '#8e44ad';

  githubGist.hljs = {};
  /*
  githubGist['hljs-name'].color = colorGreen;
  githubGist['hljs-section'].color = colorGreen;

  githubGist['hljs-string'].color = colorRedOrange;
  githubGist['hljs-variable'].color = colorRedOrange;
  githubGist['hljs-template-variable'].color = colorRedOrange;
  githubGist['hljs-strong'].color = colorRedOrange;
  githubGist['hljs-emphasis'].color = colorRedOrange;
  githubGist['hljs-quote'].color = colorRedOrange;

  githubGist['hljs-title'].color = colorBlueViolet;
  githubGist['hljs-attr'].color = colorBlueViolet;
  githubGist['hljs-selector-id'].color = colorBlueViolet;
  githubGist['hljs-selector-class'].color = colorBlueViolet;
  githubGist['hljs-selector-attr'].color = colorBlueViolet;
  githubGist['hljs-selector-pseudo'].color = colorBlueViolet;

  githubGist['hljs-keyword'].color = colorBlueViolet;
  githubGist['hljs-selector-tag'].color = colorBlueViolet;
  githubGist['hljs-type'].color = colorBlueViolet;
  */

  return (
    <SyntaxHighlighter
      language   = { props.language }
      style      = { githubGist }
      className  = { props.className }
    >
      { props.children }
    </SyntaxHighlighter>
  );
};

GithubHighlighter.propTypes = {
  className: React.PropTypes.string,
  language:  React.PropTypes.string,
  children:  React.PropTypes.any,
};

GithubHighlighter.defaultProps = {
  language: 'xml',
};

export default GithubHighlighter;
