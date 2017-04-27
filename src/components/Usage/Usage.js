import React from 'react';
import PropTypes from 'prop-types';

import Code from 'components/Code/Code';
import CodeBlock from 'components/Code/CodeBlock';

import styles from './Usage.css';

const Usage = (props) => {
  const component = props.component;
  const componentCapitalized = `${component.charAt(0).toUpperCase()}${component.slice(1)}`;

  if (component === 'new') {
    return (
      <div className={ styles.rootUD }>
        Under development
      </div>
    );
  }

  return (
    <div className={ styles.root }>
      <h2 className={ styles.title }>Easy to use</h2>
      <ol className={ styles.list }>
        <li className={ styles.item }>
          <p className={ styles.itemTitle }>Install</p>
          <Code>
            <CodeBlock
              highlight
            >
              { `npm install animakit-${component}` }
            </CodeBlock>
          </Code>
        </li>
        <li className={ styles.item }>
          <p className={ styles.itemTitle }>Import</p>
          <Code>
            <CodeBlock
              highlight
              language = { 'javascript' }
            >
              { `import Animakit${componentCapitalized} from 'animakit-${component}';` }
            </CodeBlock>
          </Code>
        </li>
        <li className={ styles.item }>
          <p className={ styles.itemTitle }>Wrap</p>
          {
            (component === 'rotator') && <Code>
              <CodeBlock highlight>
                { '<AnimakitRotator side={this.state.loading}>' }
              </CodeBlock>
              <CodeBlock>
                {
`  <Button />
  <Loader />`
                }
              </CodeBlock>
              <CodeBlock highlight>
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          }
          {
            (component === 'expander') && <Code>
              <CodeBlock>
                { '<Title onClick={toggle} />' }
              </CodeBlock>
              <CodeBlock highlight>
                { '<AnimakitExpander expanded={this.state.expanded}>' }
              </CodeBlock>
              <CodeBlock>
                { '  <Text />' }
              </CodeBlock>
              <CodeBlock highlight>
                { '</AnimakitExpander>' }
              </CodeBlock>
            </Code>
          }
          {
            (component === 'elastic') && <Code>
              <CodeBlock highlight>
                { '<AnimakitElastic>' }
              </CodeBlock>
              <CodeBlock>
                { '  <Content />'
                }
              </CodeBlock>
              <CodeBlock highlight>
                { '</AnimakitElastic>' }
              </CodeBlock>
            </Code>
          }
          {
            (component === 'slider') && <Code>
              <CodeBlock highlight>
                { '<AnimakitSlider slide={this.state.index}>' }
              </CodeBlock>
              <CodeBlock>
                {
`  <Slide />
  <Slide />
  <Slide />`
                }
              </CodeBlock>
              <CodeBlock highlight>
                { '</AnimakitSlider>' }
              </CodeBlock>
            </Code>
          }
        </li>
      </ol>
    </div>
  );
};

Usage.propTypes = {
  component: PropTypes.string,
};

Usage.defaultProps = {
  component: 'rotator',
};

export default Usage;
