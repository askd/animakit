import AnimakitRotator  from 'animakit-rotator';
import SimpleButton     from 'components/SimpleButton/SimpleButton';

import React            from 'react';
import styles           from './RotatorButton.css';

export default class RotatorButton extends React.Component {
  static propTypes = {
    modifier:         React.PropTypes.string,
    showAttempts:     React.PropTypes.bool,
    handleChangeSide: React.PropTypes.func,
  };

  static defaultProps = {
    modifier:     '',
    showAttempts: false,
  };

  state = {
    side:     'button',
    attempts: 0,
  };

  onClick() {
    this.showLoader();
  }

  listeners = {
    onClick: this.onClick.bind(this),
  };

  interval = false;

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
    }, 1000);
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
        <AnimakitRotator
          side = { this.state.side }
        >
          <SimpleButton
            key         = "button"
            className   = { styles.button }
            caption     = { caption }
            handleClick = { this.listeners.onClick }
          />
          <div
            key       = "loader"
            className = { styles.loader }
          />
        </AnimakitRotator>
      </div>
    );
  }
}
