import React             from 'react';

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
    showFull: false
  };

  listeners = {
    launch: this.launch.bind(this),
    close:  this.close.bind(this)
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

  render() {
    return (
      <div className = { styles.root }>
        <ul className = { styles.list }>
          <li className = { styles.item }>
            <h2 className = { styles.itemTitle }>Submit Button</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorButton />
              </div>
              <div className = { styles.itemCode }>
                <pre>
                  <code className="jsx">
                    {
`<AnimakitRotator side={ this.state.side }>
  <button key="button">Submit</button>
  <div key="loader" className="loader"></div>
</AnimakitRotator>`
                    }
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li className = { styles.item }>
            <h2 className = { styles.itemTitle }>Auth Form</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorForm />
              </div>
              <div className = { styles.itemCode }>
                <pre>
                  <code className="jsx">
                  {
`<AnimakitRotator side={ this.state.side }>
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
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li className = { styles.item }>
            <h2 className = { styles.itemTitle }>Promo Page</h2>
            <div className = { styles.itemContent }>
              <div className = { styles.itemComponent }>
                <RotatorPromo />
              </div>
              <div className = { styles.itemCode }>
                <pre>
                  <code className="jsx">
                    {
`<AnimakitRotator side={ this.state.side }>
  <div key="spring" className="spring">
    <h2>Spring</h2>
    ...
  </div>
  <div key="summer" className="summer">
    <h2>Summer</h2>
    ...
  </div>
  <div key="autumn" className="autumn">
    <h2>Autumn</h2>
    ...
  </div>
  <div key="winter" className="winter">
    <h2>Winter</h2>
    ...
  </div>
</AnimakitRotator>`
                    }
                  </code>
                </pre>
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
