import SliderSimple  from 'components/SliderSimple/SliderSimple';
import Demo          from 'components/Demo/Demo';
import DemoComponent from 'components/Demo/DemoComponent';
import DemoCode      from 'components/Demo/DemoCode';
import Code          from 'components/Code/Code';
import CodeBlock     from 'components/Code/CodeBlock';

import React         from 'react';

export default class SliderDemo extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.any,
    onlyOne:  React.PropTypes.bool,
  };

  static defaultProps = {
    onlyOne: false,
  };

  state = {
    slide: {
      simple: 'mars',
    },
    slideChanged: null,
  };

  listeners = {
    changeSlide: {
      simple: this.changeSlide.bind(this, 'simple'),
    },
  };

  changeSlide(name, value) {
    const slide = this.state.slide;
    slide[name] = value;
    const slideChanged = name;

    this.setState({ slide, slideChanged });

    setTimeout(() => {
      this.setState({ slideChanged: null });
    }, 500);
  }

  render() {
    return (
      <div>
        <Demo key = "simple">
          <DemoComponent>
            <SliderSimple handleChangeSlide = { this.listeners.changeSlide.simple } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.slideChanged === 'simple' }
              >
                { `<AnimakitSlider slide="${this.state.slide.simple}">` }
              </CodeBlock>
              <CodeBlock>
                {
`  <div key="mars">
    ...
  </div>
  <div key="earth">
    ...
  </div>
  <div key="venus">
    ...
  </div>
  <div key="mercury">
    ...
  </div>`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitSlider>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo>
      </div>
    );
  }
}
