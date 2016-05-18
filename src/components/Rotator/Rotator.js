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
      button:  'button',
      button2: 'button',
      form:    'signin',
      promo:   'mars'
    },
    sideChanged: null
  };

  listeners = {
    launch:     this.launch.bind(this),
    close:      this.close.bind(this),
    changeSide: {
      button:  this.changeSide.bind(this, 'button'),
      button2: this.changeSide.bind(this, 'button2'),
      form:    this.changeSide.bind(this, 'form'),
      promo:   this.changeSide.bind(this, 'promo')
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
                <p className = { RotatorStyles.itemComment }>Fixed width</p>
                <RotatorButton
                  showAttempts
                  handleChangeSide = { this.listeners.changeSide.button }
                />
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
            key = "button2"
            className = { RotatorStyles.item }
          >
            <div className = { RotatorStyles.itemContent }>
              <div className = { RotatorStyles.itemComponent }>
                <p className = { RotatorStyles.itemComment }>
                  Flexible width
                  (see <a href="https://github.com/animakit/animakit-rotator/blob/master/README.md">
                    Limitations in README
                  </a>)
                </p>
                <RotatorButton
                  modifier = "Flexible"
                  handleChangeSide = { this.listeners.changeSide.button2 }
                />
              </div>
              <div className = { RotatorStyles.itemCode }>
                <div className = { CodeStyles.root }>
                  <SyntaxHighlighter
                    language   = "xml"
                    stylesheet = "github-gist"
                    style      = {{}}
                    className  = { this.state.sideChanged === 'button2' ? CodeStyles.blockHLA : CodeStyles.blockHL }
                  >
                    { `<AnimakitRotator side="${ this.state.side.button2 }">` }
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
                    {
`<AnimakitRotator
  side="${ this.state.side.form }"
  axis="Y"
  shadow
>`
                    }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
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
                    {
`<AnimakitRotator
  side="${ this.state.side.promo }"
  duration={2000}
  shadow
>`
                    }
                  </SyntaxHighlighter>
                  <pre className = { CodeStyles.block }>
                    <code>
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
