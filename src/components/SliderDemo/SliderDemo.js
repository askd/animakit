import SliderSimple   from 'components/SliderSimple/SliderSimple';
import SliderFlexible from 'components/SliderFlexible/SliderFlexible';
import SliderColor    from 'components/SliderColor/SliderColor';
import SliderVertical from 'components/SliderVertical/SliderVertical';
import SliderTimer    from 'components/SliderTimer/SliderTimer';
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
      simple:   'mars',
      flexible: 0,
      color:    'red',
      vertical: 'mars',
      timer:    ['0', '0', '0', '0', '0', '0'],
    },
    slideChanged:   null,
    indexesChanged: null,
  };

  listeners = {
    changeSlide: {
      flexible: this.changeSlide.bind(this, 'flexible'),
      simple:   this.changeSlide.bind(this, 'simple'),
      color:    this.changeSlide.bind(this, 'color'),
      vertical: this.changeSlide.bind(this, 'vertical'),
      timer:    this.changeSlide.bind(this, 'timer'),
    },
  };

  changeSlide(name, value) {
    const slide = { ...this.state.slide };
    const slideChanged = name;
    let indexesChanged = null;

    if (name === 'timer') {
      indexesChanged = Object.keys(value);
      indexesChanged.forEach(index => {
        slide[name][index] = value[index];
      });
    } else {
      slide[name] = value;
    }

    this.setState({ slide, slideChanged, indexesChanged });

    setTimeout(() => {
      this.setState({ slideChanged: null, indexesChanged: null });
    }, 500);
  }

  isSlideChanged(name, index = null) {
    if (name !== 'timer') return this.state.slideChanged === name;

    return this.state.slideChanged === name && this.state.indexesChanged.indexOf(index.toString()) !== -1;
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
                blinkActive = { this.isSlideChanged('simple') }
              >
                {
`<AnimakitSlider slide="${this.state.slide.simple}">` }
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

        { !onlyOne && <Demo key = "flexible">
          <DemoComponent>
            <SliderFlexible handleChangeSlide = { this.listeners.changeSlide.flexible } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.isSlideChanged('flexible') }
              >
                {
`<AnimakitSlider
  slide="${this.state.slide.flexible}"
  flexible
  skip
>` }
              </CodeBlock>
              <CodeBlock>
                {
`  <div className="slide">
    <img src="/images/00.jpg" />
  </div>
  ...
  <div className="slide">
    <img src="/images/10.jpg" />
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

        { !onlyOne && <Demo key = "color">
          <DemoComponent>
            <SliderColor handleChangeSlide = { this.listeners.changeSlide.color } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.isSlideChanged('color') }
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

        { false && <Demo key = "vertical">
          <DemoComponent>
            <SliderVertical handleChangeSlide = { this.listeners.changeSlide.vertical } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.isSlideChanged('vertical') }
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

        { !onlyOne && <Demo key = "timer">
          <DemoComponent>
            <SliderTimer handleChangeSlide = { this.listeners.changeSlide.timer } />
          </DemoComponent>
          <DemoCode>
            <Code>
              { Array.from(Array(6).keys()).map(index =>
                <div key = { index }>
                  <CodeBlock
                    highlight
                    blink
                    blinkActive = { this.isSlideChanged('timer', index) }
                  >
                    { `<AnimakitSlider slide="${this.state.slide.timer[index]}" vertical loop skip>` }
                  </CodeBlock>
                  <CodeBlock>
                    {
                      '  <div>0</div> ... <div>9</div>'
                    }
                  </CodeBlock>
                  <CodeBlock
                    highlight
                  >
                    { '</AnimakitSlider>' }
                  </CodeBlock>
                </div>
              ) }
            </Code>
          </DemoCode>
        </Demo> }
      </div>
    );
  }
}
