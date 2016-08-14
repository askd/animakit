import React     from 'react';
import Code      from 'components/Code/Code';
import CodeBlock from 'components/Code/CodeBlock';

import styles    from './Usage.css';

export default class Usage extends React.PureComponent {
  static propTypes = {
    component: React.PropTypes.string,
  };

  static defaultProps = {
    component: 'rotator',
  };

  render() {
    const component = this.props.component;
    const componentCapitalized = `${component.charAt(0).toUpperCase()}${component.slice(1)}`;

    return (
      <div className = { styles.root }>
        <h2 className = { styles.title }>Easy to use</h2>
        <ol className = { styles.list }>
          <li className = { styles.item }>
            <p className = { styles.itemTitle }>Install</p>
            <Code>
              <CodeBlock
                highlight
              >
                { `npm install animakit-${component}` }
              </CodeBlock>
            </Code>
          </li>
          <li className = { styles.item }>
            <p className = { styles.itemTitle }>Import</p>
            <Code>
              <CodeBlock
                highlight
                language = { 'javascript' }
              >
                { `import Animakit${componentCapitalized} from 'animakit-${component}';` }
              </CodeBlock>
            </Code>
          </li>
          <li className = { styles.item }>
            <p className = { styles.itemTitle }>Wrap</p>
            {
              (component === 'rotator') && <Code>
                <CodeBlock highlight>
                  {
`<AnimakitRotator side={this.state.loading}>
  <Button />
  <Loader />
</AnimakitRotator>`
                  }
                </CodeBlock>
              </Code>
            }
            {
              (component === 'expander') && <Code>
                <CodeBlock>
                  {
`<div className="title" onClick={toggle}>
  {this.props.title}
</div>`
                  }
                </CodeBlock>
                <CodeBlock highlight>
                  { '<AnimakitExpander expanded={this.state.expanded}>' }
                </CodeBlock>
                <CodeBlock>
                  {
`  <div className="text">
    {this.props.text}
  </div>`
                  }
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
                  {
`  <div className="text">
    {this.props.text}
  </div>`
                  }
                </CodeBlock>
                <CodeBlock highlight>
                  { '</AnimakitElastic>' }
                </CodeBlock>
              </Code>
            }
          </li>
        </ol>
      </div>
    );
  }
}
