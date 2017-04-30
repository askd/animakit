import React from 'react';
import PropTypes from 'prop-types';

// import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
// import javascript from 'highlight.js/lib/languages/javascript';
// import xml from 'highlight.js/lib/languages/xml';
// import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';

// registerLanguage('javascript', javascript);
// registerLanguage('xml', xml);

const GithubHighlighter = (props) => {
  // const colorRedOrange = '#e74c3c';
  // const colorGreen = '#27ae60';
  // const colorBlueViolet = '#8e44ad';

  // githubGist.hljs = {};
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

  // return (
  //   <SyntaxHighlighter
  //     language = { props.language }
  //     style = { githubGist }
  //     className = { props.className }
  //   >
  //     { props.children }
  //   </SyntaxHighlighter>
  // );
  let html = props.children;
  html = html.replace(/</g, '&lt;');
  html = html.replace(/>/g, '&gt;');
  html = html.replace(/("[^"]+")/g, '<strong>$1</strong>');
  html = html.replace(/({[^}]+})/g, '<strong>$1</strong>');
  html = html.replace(/(Animakit[A-Za-z]+)/g, '<em>$1</em>');
  return (
    <pre className = { props.className }>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

GithubHighlighter.propTypes = {
  className: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.any,
};

GithubHighlighter.defaultProps = {
  language: 'xml',
};

export default GithubHighlighter;
