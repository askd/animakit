import ElasticSimple from 'components/ElasticSimple/ElasticSimple';
import Demo          from 'components/Demo/Demo';
import DemoComponent from 'components/Demo/DemoComponent';
import DemoCode      from 'components/Demo/DemoCode';
import Code          from 'components/Code/Code';
import CodeBlock     from 'components/Code/CodeBlock';

import React         from 'react';

export default class ElasticDemo extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
    onlyOne:  React.PropTypes.bool,
  };

  static defaultProps = {
    onlyOne: false,
  };

  render() {
    const onlyOne = this.props.onlyOne;

    return (
      <div>
        <Demo key = "simple">
          <DemoComponent>
            <ElasticSimple onlyHorizontal = { onlyOne } />
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
`  <Content>
    <Article />

    <Image />
  </Content>`
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
