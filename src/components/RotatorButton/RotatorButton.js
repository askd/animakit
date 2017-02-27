import React from 'react';

import AnimakitRotator from 'components/AnimakitRotator';

import SimpleButton from 'components/SimpleButton/SimpleButton';

import styles from './RotatorButton.css';

export default class RotatorButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: 'button',
      attempts: 0,
    };

    this.listeners = {
      onClick: this.onClick.bind(this),
    };

    this.interval = false;
  }

  onClick() {
    this.showLoader();
  }

  /* componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();
      const caption = date.toLocaleTimeString();
      console.log(caption);
      this.setState({ caption });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  } */

  showLoader() {
    this.setState({ side: 'loader' });
    this.props.handleChangeSide('loader');

    if (this.loaderTimeout) clearTimeout(this.loaderTimeout);

    this.loaderTimeout = setTimeout(() => {
      if (this.props.showAttempts) {
        const attempts = this.state.attempts + 1;
        this.setState({ attempts });
      }

      this.showButton();
    }, 1500);
  }

  showButton() {
    this.setState({ side: 'button' });
    this.props.handleChangeSide('button');
  }

  render() {
    let caption = 'Submit form';
    if (this.props.showAttempts) {
      const attempts = this.state.attempts ? ` (attempts: ${this.state.attempts})` : '';
      caption = `Submit form${attempts}`;
    }

    return (
      <div className = { styles[`root${this.props.modifier}`] }>
        <AnimakitRotator side={ this.state.side }>
          <SimpleButton
            key="button"
            className={ styles.button }
            caption={ caption }
            handleClick={ this.listeners.onClick }
          />
          <div
            key="loader"
            className={ styles.loader }
          />
        </AnimakitRotator>
      </div>
    );
  }
}

RotatorButton.propTypes = {
  modifier: React.PropTypes.string,
  showAttempts: React.PropTypes.bool,
  handleChangeSide: React.PropTypes.func,
};

RotatorButton.defaultProps = {
  modifier: '',
  showAttempts: false,
};
