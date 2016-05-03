import React            from 'react';
import styles           from './RotatorButton.css';
import { SimpleButton } from 'components/SimpleButton/SimpleButton';
import AnimakitRotator  from 'animakit-rotator';

export class RotatorButton extends React.Component {
  static propTypes = {
    handleChangeSide: React.PropTypes.func
  };

  state = {
    side:     'button',
    attempts: 0
  };

  listeners = {
    onClick: this.onClick.bind(this)
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
      const attempts = this.state.attempts + 1;
      this.setState({ attempts });

      this.showButton();
    }, 1000);
  }

  showButton() {
    this.setState({ side: 'button' });
    this.props.handleChangeSide('button');
  }

  onClick() {
    this.showLoader();
  }

  render() {
    const attempts = this.state.attempts ? ` (attempts: ${ this.state.attempts })` : '';

    return (
      <div className = { styles.root }>
        <AnimakitRotator
          side = { this.state.side }
        >
          <SimpleButton
            key         = "button"
            className   = { styles.button }
            caption     = { `Submit${ attempts }` }
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
