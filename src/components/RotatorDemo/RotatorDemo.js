import RotatorButton from 'components/RotatorButton/RotatorButton';
import RotatorForm   from 'components/RotatorForm/RotatorForm';
import RotatorPromo  from 'components/RotatorPromo/RotatorPromo';
import RotatorFull   from 'components/RotatorFull/RotatorFull';
import Demo          from 'components/Demo/Demo';
import DemoComponent from 'components/Demo/DemoComponent';
import DemoCode      from 'components/Demo/DemoCode';
import Code          from 'components/Code/Code';
import CodeBlock     from 'components/Code/CodeBlock';

import React         from 'react';

export default class RotatorDemo extends React.Component {
  static propTypes = {
    children:   React.PropTypes.any,
    onlyOne:    React.PropTypes.bool,
    playground: React.PropTypes.bool,
  };

  static defaultProps = {
    onlyOne:    false,
    playground: false,
  };

  state = {
    side: {
      button:  'button',
      button2: 'button',
      form:    'signin',
      promo:   'mars',
    },
    sideChanged: null,
  };

  listeners = {
    changeSide: {
      button:  this.changeSide.bind(this, 'button'),
      button2: this.changeSide.bind(this, 'button2'),
      form:    this.changeSide.bind(this, 'form'),
      promo:   this.changeSide.bind(this, 'promo'),
    },
  };

  changeSide(name, value) {
    const side = this.state.side;
    side[name] = value;
    const sideChanged = name;

    this.setState({ side, sideChanged });

    setTimeout(() => {
      this.setState({ sideChanged: null });
    }, 500);
  }

  render() {
    const onlyOne = this.props.onlyOne;

    return (
      <div>
        { !onlyOne && <Demo key = "button">
          <DemoComponent
            comment = { 'Fixed width' }
          >
            <RotatorButton
              showAttempts
              handleChangeSide = { this.listeners.changeSide.button }
            />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.sideChanged === 'button' }
              >
                { `<AnimakitRotator side="${this.state.side.button}">` }
              </CodeBlock>
              <CodeBlock>
                {
`  <Button key="button">Submit form</Button>
  <Loader key="loader" />`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo> }

        <Demo key = "button2">
          <DemoComponent
            comment = { onlyOne ? null : <span>Flexible width
              (see <a href="https://github.com/animakit/animakit-rotator/blob/master/README.md">
                Limitations in README
              </a>)</span> }
          >
            <RotatorButton
              modifier = "Flexible"
              handleChangeSide = { this.listeners.changeSide.button2 }
            />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.sideChanged === 'button2' }
              >
                { `<AnimakitRotator side="${this.state.side.button2}">` }
              </CodeBlock>
              <CodeBlock>
                {
`  <Button key="button">Submit form</Button>
  <Loader key="loader" />`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo>

        { !onlyOne && <Demo key = "form">
          <DemoComponent>
            <RotatorForm handleChangeSide = { this.listeners.changeSide.form } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.sideChanged === 'form' }
              >
                {
`<AnimakitRotator
  side="${this.state.side.form}"
  axis="Y"
  shadow
>`
                }
              </CodeBlock>
              <CodeBlock>
                {
`  <SignInForm key="signin" />

  <SignUpForm key="signup" />

  <PasswordRecoveryForm key="passrec" />`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo> }

        { !onlyOne && <Demo key = "promo">
          <DemoComponent>
            <RotatorPromo handleChangeSide = { this.listeners.changeSide.promo } />
          </DemoComponent>
          <DemoCode>
            <Code>
              <CodeBlock
                highlight
                blink
                blinkActive = { this.state.sideChanged === 'promo' }
              >
                {
`<AnimakitRotator
  side="${this.state.side.promo}"
  duration={2000}
  shadow
>`
                }
              </CodeBlock>
              <CodeBlock>
                {
`  <Slide key="mars" />

  <Slide key="earth" />

  <Slide key="venus" />

  <Slide key="mercury" />`
                }
              </CodeBlock>
              <CodeBlock
                highlight
              >
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo> }
        { !onlyOne && <div>
          { this.props.playground &&
            <DemoComponent fullscreen>
              <RotatorFull />
            </DemoComponent>
          }
        </div> }
      </div>
    );
  }
}
