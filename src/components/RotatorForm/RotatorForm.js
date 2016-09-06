// import AnimakitRotator  from 'animakit-rotator';
import AnimakitRotator from 'components/AnimakitRotator/AnimakitRotator';

import React           from 'react';

import styles          from './RotatorForm.css';

export default class RotatorForm extends React.Component {
  static propTypes = {
    handleChangeSide: React.PropTypes.func,
  };

  state = {
    form: 'signin',
  };

  onClickSignIn() {
    this.showForm('signin');
  }

  onClickSignUp() {
    this.showForm('signup');
  }

  onClickPassRec() {
    this.showForm('passrec');
  }

  showForm(form) {
    this.setState({ form });
    this.props.handleChangeSide(form);
  }

  listeners = {
    onClickSignIn:  this.onClickSignIn.bind(this),
    onClickSignUp:  this.onClickSignUp.bind(this),
    onClickPassRec: this.onClickPassRec.bind(this),
  };

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitRotator
          side = { this.state.form }
          axis = "Y"
          shadow
        >
          <div
            key = "signin"
            className = { styles.form }
          >
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

          <div
            key = "signup"
            className = { styles.form }
          >
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

          <div
            key = "passrec"
            className = { styles.form }
          >
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
