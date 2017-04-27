import React from 'react';
import PropTypes from 'prop-types';

import ElasticSimple from 'components/ElasticSimple/ElasticSimple';
import Demo from 'components/Demo/Demo';
import DemoComponent from 'components/Demo/DemoComponent';
import DemoCode from 'components/Demo/DemoCode';
import Code from 'components/Code/Code';
import CodeBlock from 'components/Code/CodeBlock';

const ElasticDemo = (props) =>
  <div>
    <Demo key = "simple">
      <DemoComponent>
        <ElasticSimple onlyHorizontal = { props.onlyOne } />
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
;

ElasticDemo.propTypes = {
  children: PropTypes.any,
  onlyOne: PropTypes.bool,
};

ElasticDemo.defaultProps = {
  onlyOne: false,
};

export default ElasticDemo;
