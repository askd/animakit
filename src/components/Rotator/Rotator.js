import React             from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import RotatorStyles     from './Rotator.css';
import CodeStyles        from 'components/Code/Code.css';

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
      <div className = { RotatorStyles.root }>
        <div className = { RotatorStyles.intro }>
          <p>Rotate your components in three-dimensional space.
          Just wrap them with AnimakitRotator, set the side and enjoy ;)</p>
        </div>
        <ul className = { RotatorStyles.list }>
          <li
            key = "button"
            className = { RotatorStyles.item }
          >
            <div className = { RotatorStyles.itemContent }>
              <div className = { RotatorStyles.itemComponent }>
                <RotatorButton handleChangeSide = { this.listeners.changeSide.button } />
              </div>
              <div className = { RotatorStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { this.state.sideChanged === 'button' ? CodeStyles.blockHLA : CodeStyles.blockHL }
                  >
                    { `<AnimakitRotator side="${ this.state.side.button }">` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`  <button key="button">Submit</button>
  <div key="loader" className="loader"></div>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitRotator>' }
                  </SyntaxHighlighter>
                  </div>
              </div>
            </div>
          </li>

          <li
            key = "form"
            className = { RotatorStyles.item }
          >
            <div className = { RotatorStyles.itemContent }>
              <div className = { RotatorStyles.itemComponent }>
                <RotatorForm handleChangeSide = { this.listeners.changeSide.form } />
              </div>
              <div className = { RotatorStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { this.state.sideChanged === 'form' ? CodeStyles.blockHLA : CodeStyles.blockHL }
                  >
                    { `<AnimakitRotator side="${ this.state.side.form }" axis="Y">` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`  <form key="signin">
    <h2>Sign In</h2>
    ...
    <button>Sign In</button>
  </form>
  <form key="signup">
    <h2>Sign Up</h2>
    ...
    <button>Sign Up</button>
  </form>
  <form key="passrec">
    <h2>Password Recovery</h2>
    ...
    <button>Reset Password</button>
  </form>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitRotator>' }
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </li>

          <li
            key = "promo"
            className = { RotatorStyles.item }
          >
            <div className = { RotatorStyles.itemContent }>
              <div className = { RotatorStyles.itemComponent }>
                <RotatorPromo handleChangeSide = { this.listeners.changeSide.promo } />
              </div>
              <div className = { RotatorStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { this.state.sideChanged === 'promo' ? CodeStyles.blockHLA : CodeStyles.blockHL }
                  >
                    { `<AnimakitRotator side="${ this.state.side.promo }" duration={2000}>` }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
                      {
`  <div key="mars">
    <h2>Mars</h2>
    ...
  </div>
  <div key="earth">
    <h2>Earth</h2>
    ...
  </div>
  <div key="venus">
    <h2>Venus</h2>
    ...
  </div>
  <div key="mercury">
    <h2>Mercury</h2>
    ...
  </div>`
                      }
                    </code>
                  </pre>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { CodeStyles.blockHL }
                  >
                    { '</AnimakitRotator>' }
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </li>
          <li className = { RotatorStyles.item }>
            <p className = { RotatorStyles.itemTitle }>Need more options?</p>
            <div className = { RotatorStyles.itemContent }>
              { !this.state.showFull &&
                <button
                  className = { RotatorStyles.buttonLaunch }
                  onClick = { this.listeners.launch }
                >
                  Launch
                </button>
              }
              { this.state.showFull &&
                <div className = { RotatorStyles.itemComponentFullscreen }>
                  <RotatorFull />
                  <button
                    className = { RotatorStyles.buttonHide }
                    onClick = { this.listeners.close }
                  >
                    Hide
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
