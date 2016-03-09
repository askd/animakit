import React           from 'react';
import styles          from './RotatorButton.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorButton extends React.Component {
  static propTypes = {
    handleChangeSide: React.PropTypes.func
  };

  state = {
    side: 'button'
  };

  listeners = {
    onClick: this.onClick.bind(this)
  };

  showLoader() {
    this.setState({ side: 'loader' });
    this.props.handleChangeSide('loader');

    if (this.loaderTimeout) clearTimeout(this.loaderTimeout);

    this.loaderTimeout = setTimeout(() => {
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
    return (
      <div className = { styles.root }>
        <AnimakitRotator
          side = { this.state.side }
        >
          <button
            key       = "button"
            className = { styles.button }
            onClick   = { this.listeners.onClick }
          >Submit</button>
          <div
            key       = "loader"
            className = { styles.loader }
          />
        </AnimakitRotator>
      </div>
    );
  }
}
