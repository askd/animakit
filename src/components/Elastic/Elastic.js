import React             from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist }    from 'react-syntax-highlighter/dist/styles';

import ElasticStyles     from './Elastic.css';
import CodeStyles        from 'components/Code/Code.css';

import { ElasticSimple } from 'components/ElasticSimple/ElasticSimple';

export class Elastic extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    githubGist.hljs = {};

    return (
      <div className = { ElasticStyles.root }>
        <div className = { ElasticStyles.intro }>
          <p>{ `Don't you like abrupt changes in the sizes?
          AnimakitElastic will solve this problem ;)` }</p>
        </div>
        <ul className = { ElasticStyles.list }>
          <li
            key = "simple"
            className = { ElasticStyles.item }
          >
            <div className = { ElasticStyles.itemContent }>
              <div className = { ElasticStyles.itemComponent }>
                <ElasticSimple />
              </div>
              <div className = { ElasticStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <SyntaxHighlighter
                    language   = "xml"
                    style      = { githubGist }
                    className  = { CodeStyles.blockHL }
                  >
                    { '<AnimakitElastic>' }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`  <div>
    <article>
      <h2>I Got You</h2>
      ...
    </article>
    <img ... />
  </div>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    style      = { githubGist }
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitElastic>' }
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    );
  }
}
