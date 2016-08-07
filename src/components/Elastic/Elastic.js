import ElasticSimple from 'components/ElasticSimple/ElasticSimple';
import Demo          from 'components/Demo/Demo';
import DemoComponent from 'components/Demo/DemoComponent';
import DemoCode      from 'components/Demo/DemoCode';
import Code          from 'components/Code/Code';
import CodeBlock     from 'components/Code/CodeBlock';

import React         from 'react';

import ElasticStyles from './Elastic.css';

export default class Elastic extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div className = { ElasticStyles.root }>
        <div className = { ElasticStyles.intro }>
          <p>{ `Don't you like abrupt changes in the sizes?
          AnimakitElastic will solve this problem ;)` }</p>
        </div>

        <Demo key = "simple">
          <DemoComponent>
            <ElasticSimple />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
              >
                { '<AnimakitElastic>' }
              </CodeBlock>
              <CodeBlock>
                {
`  <div>
    <article>
      <h2>I Got You</h2>
      ...
    </article>
    <img ... />
  </div>`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitElastic>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo>

      </div>
    );
  }
}
