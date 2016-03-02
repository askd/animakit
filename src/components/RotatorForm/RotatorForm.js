import React           from 'react';
import styles          from './RotatorForm.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorForm extends React.Component {
  state = {
    side:       0,
    sidesCount: 3
  };

  listeners = {
    onClickSignIn:  this.onClickSignIn.bind(this),
    onClickSignUp:  this.onClickSignUp.bind(this),
    onClickPassRec: this.onClickPassRec.bind(this)
  };

  showSignIn() {
    this.setState({ side: 0 });
  }

  showSignUp() {
    this.setState({ side: 1 });
  }

  showPassRec() {
    this.setState({ side: 2 });
  }

  onClickSignIn() {
    this.showSignIn();
  }

  onClickSignUp() {
    this.showSignUp();
  }

  onClickPassRec() {
    this.showPassRec();
  }

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitRotator
          axis = "Y"
          side = { this.state.side }
        >

          <div className = { styles.form }>
            <div className = { styles.formMain }>
              <h2 className={ styles.title }>Sign In</h2>
              <input
                className   = { styles.input }
                type        = "email"
                placeholder = "E-mail"
              />
              <input
                className   = { styles.input }
                type        = "password"
                placeholder = "Password"
              />
              <span
                className = { styles.link }
                onClick   = { this.listeners.onClickPassRec }
              >
                Forgot password?
              </span>
              <button className = { styles.button }>Sign In</button>
            </div>
            <div
              className = { styles.formFooter }
              onClick   = { this.listeners.onClickSignUp }
            >
              Not a Member Yet?
            </div>
          </div>

          <div className = { styles.form }>
            <div className = { styles.formMain }>
              <h2 className={ styles.title }>Sign Up</h2>
              <input
                className   = { styles.input }
                type        = "email"
                placeholder = "E-mail"
              />
              <input
                className   = { styles.input }
                type        = "password"
                placeholder = "Password"
              />
              <input
                className   = { styles.input }
                type        = "password"
                placeholder = "Confirm Password"
              />
              <button className = { styles.button }>Sign Up</button>
            </div>
            <div
              className = { styles.formFooter }
              onClick   = { this.listeners.onClickSignIn }
            >
              Already a Member?
            </div>
          </div>

          <div key = "passrec" className = { styles.form }>
            <div className = { styles.formMain }>
              <h2 className={ styles.title }>Password Recovery</h2>
              <p className = { styles.formText }>
                { 'Enter your e-mail address and we\'ll help you reset your password:' }
              </p>
              <input
                className   = { styles.input }
                type        = "email"
                placeholder = "E-mail"
              />
              <button className = { styles.button }>Reset Password</button>
            </div>
            <div
              className = { styles.formFooter }
              onClick   = { this.listeners.onClickSignIn }
            >
              Ready to Sign In?
            </div>
          </div>
        </AnimakitRotator>
      </div>
    );
  }
}
