import React           from 'react';
import styles          from './RotatorButton.css';
import AnimakitRotator from 'animakit-rotator';

export class RotatorButton extends React.Component {
  state = {
    side:       0,
    sidesCount: 2
  };

  listeners = {
    onClick: this.onClick.bind(this)
  };

  showLoader() {
    this.setState({ side: 1 });

    if (this.loaderTimeout) clearTimeout(this.loaderTimeout);

    this.loaderTimeout = setTimeout(() => {
      this.showButton();
    }, 3000);
  }

  showButton() {
    this.setState({ side: 0 });
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
