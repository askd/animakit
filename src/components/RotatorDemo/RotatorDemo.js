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

import styles        from './RotatorDemo.css';

export default class RotatorDemo extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    onlyOne:  React.PropTypes.bool,
  };

  static defaultProps = {
    onlyOne: false,
  };

  state = {
    showFull: false,
    side:     {
      button:  'button',
      button2: 'button',
      form:    'signin',
      promo:   'mars',
    },
    sideChanged: null,
  };

  listeners = {
    launch:     this.launch.bind(this),
    close:      this.close.bind(this),
    changeSide: {
      button:  this.changeSide.bind(this, 'button'),
      button2: this.changeSide.bind(this, 'button2'),
      form:    this.changeSide.bind(this, 'form'),
      promo:   this.changeSide.bind(this, 'promo'),
    },
  };

  launch() {
    this.setState({
      showFull: true,
    });
  }

  close() {
    this.setState({
      showFull: false,
    });
  }

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
`  <button key="button">Submit form</button>
  <div key="loader" className="loader"></div>`
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
`  <button key="button">Submit form</button>
  <div key="loader" className="loader"></div>`
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
`  <form key="signin">
    ...
  </form>
  <form key="signup">
    ...
  </form>
  <form key="passrec">
    ...
  </form>`
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
                Active = { this.state.sideChanged === 'promo' }
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
                { '</AnimakitRotator>' }
              </CodeBlock>
            </Code>
          </DemoCode>
        </Demo> }

        { !onlyOne && <Demo
          key   = "full"
          text = { <span>Need more animations? Press the red button&nbsp;;)</span> }
        >
          { !this.state.showFull &&
            <button
              className = { styles.buttonLaunch }
              onClick = { this.listeners.launch }
            >
              Launch
            </button>
          }
          { this.state.showFull &&
            <DemoComponent fullscreen>
              <RotatorFull />
              <button
                className = { styles.buttonHide }
                onClick = { this.listeners.close }
              >
                Hide
              </button>
            </DemoComponent>
          }
        </Demo> }

      </div>
    );
  }
}
