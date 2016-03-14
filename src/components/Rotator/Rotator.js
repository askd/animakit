import React             from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles            from './Rotator.css';

import { RotatorButton } from 'components/RotatorButton/RotatorButton';
import { RotatorForm }   from 'components/RotatorForm/RotatorForm';
import { RotatorPromo }  from 'components/RotatorPromo/RotatorPromo';
import { RotatorFull }   from 'components/RotatorFull/RotatorFull';

export class Rotator extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  state = {
    showFull: false,
    side:     {
      button: 'button',
      form:   'signin',
      promo:  'mars'
    },
    sideChanged: null
  };

  listeners = {
    launch:     this.launch.bind(this),
    close:      this.close.bind(this),
    changeSide: {
      button: this.changeSide.bind(this, 'button'),
      form:   this.changeSide.bind(this, 'form'),
      promo:  this.changeSide.bind(this, 'promo')
    }
  };

  launch() {
    this.setState({
      showFull: true
    });
  }

  close() {
    this.setState({
      showFull: false
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
    return (
      <div className = { styles.root }>
        <ul className = { styles.list }>
          <li
            key = "button"
            className = { styles.item }
          >
            <h2 className = { styles.itemTitle }>Submit Button</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorButton handleChangeSide = { this.listeners.changeSide.button } />
              </div>
              <div className = { this.state.sideChanged === 'button' ? styles.itemCodeChanged : styles.itemCode }>
                <SyntaxHighlighter language="xml" stylesheet="default">
                  {
`<AnimakitRotator side="${ this.state.side.button }">
  <button key="button">Submit</button>
  <div key="loader" className="loader"></div>
</AnimakitRotator>`
                  }
                </SyntaxHighlighter>
              </div>
            </div>
          </li>

          <li
            key = "form"
            className = { styles.item }
          >
            <h2 className = { styles.itemTitle }>Auth Form</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorForm handleChangeSide = { this.listeners.changeSide.form } />
              </div>
              <div className = { this.state.sideChanged === 'form' ? styles.itemCodeChanged : styles.itemCode }>
                <SyntaxHighlighter language="xml" stylesheet="default">
                  {
`<AnimakitRotator side="${ this.state.side.form }">
  <form key="signin" method="post">
    <h2>Sign In</h2>
    ...
    <button>Sign In</button>
  </form>
  <form key="signup" method="post">
    <h2>Sign Up</h2>
    ...
    <button>Sign Up</button>
  </form>
  <form key="passrec" method="post">
    <h2>Password Recovery</h2>
    ...
    <button>Reset Password</button>
  </form>
</AnimakitRotator>`
                }
                </SyntaxHighlighter>
              </div>
            </div>
          </li>

          <li
            key = "promo"
            className = { styles.item }
          >
            <h2 className = { styles.itemTitle }>Promo Page</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorPromo handleChangeSide = { this.listeners.changeSide.promo } />
              </div>
              <div className = { this.state.sideChanged === 'promo' ? styles.itemCodeChanged : styles.itemCode }>
                <SyntaxHighlighter language="xml" stylesheet="default">
                  {
`<AnimakitRotator side="${ this.state.side.promo }">
  <div key="mars" className="mars">
    <h2>Mars</h2>
    ...
  </div>
  <div key="earth" className="earth">
    <h2>Earth</h2>
    ...
  </div>
  <div key="venus" className="venus">
    <h2>Venus</h2>
    ...
  </div>
  <div key="mercury" className="mercury">
    <h2>Mercury</h2>
    ...
  </div>
</AnimakitRotator>`
                  }
                </SyntaxHighlighter>
              </div>
            </div>
          </li>
          <li className = { styles.item }>
            <h2 className = { styles.itemTitle }>Full Functionality</h2>
            <div className = { styles.itemContent }>
              <button
                className = { styles.buttonLaunch }
                onClick = { this.listeners.launch }
              >
                Launch
              </button>
              { this.state.showFull &&
                <div className = { styles.itemComponentFullscreen }>
                  <RotatorFull />
                  <button
                    className = { styles.buttonClose }
                    onClick = { this.listeners.close }
                  >
                    Close
                  </button>
                </div>
              }
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
