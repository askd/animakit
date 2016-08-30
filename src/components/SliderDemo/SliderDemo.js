import SliderSimple   from 'components/SliderSimple/SliderSimple';
import SliderColor    from 'components/SliderColor/SliderColor';
import SliderVertical from 'components/SliderVertical/SliderVertical';
import Demo           from 'components/Demo/Demo';
import DemoComponent  from 'components/Demo/DemoComponent';
import DemoCode       from 'components/Demo/DemoCode';
import Code           from 'components/Code/Code';
import CodeBlock      from 'components/Code/CodeBlock';

import React          from 'react';

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
      simple:   0,
      color:    'red',
      vertical: 'mars',
    },
    slideChanged: null,
  };

  listeners = {
    changeSlide: {
      simple:   this.changeSlide.bind(this, 'simple'),
      color:    this.changeSlide.bind(this, 'color'),
      vertical: this.changeSlide.bind(this, 'vertical'),
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
    const onlyOne = this.props.onlyOne;

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
                {
`<AnimakitSlider
  slide="${this.state.slide.simple}"
  flexible
  skip
>` }
              </CodeBlock>
              <CodeBlock>
                {
`  <div className="slide">...</div>
  ...
  <div className="slide">...</div>`
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

        { !onlyOne && <Demo key = "color">
          <DemoComponent>
            <SliderColor handleChangeSlide = { this.listeners.changeSlide.color } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.slideChanged === 'color' }
              >
                { `<AnimakitSlider slide="${this.state.slide.color}" loop>` }
              </CodeBlock>
              <CodeBlock>
                {
`  <div key="red">...</div>
  <div key="orange">...</div>
  <div key="yellow">...</div>
  <div key="green">...</div>
  <div key="blue">...</div>
  <div key="purple"></div>`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitSlider>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo> }

        { !onlyOne && <Demo key = "vertical">
          <DemoComponent>
            <SliderVertical handleChangeSlide = { this.listeners.changeSlide.vertical } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.slideChanged === 'vertical' }
              >
                { `<AnimakitSlider slide="${this.state.slide.vertical}" vertical>` }
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
        </Demo> }
      </div>
    );
  }
}
