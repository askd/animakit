import React from 'react';

export class SimpleButton extends React.Component {
  static propTypes = {
    className:   React.PropTypes.string,
    caption:     React.PropTypes.string,
    handleClick: React.PropTypes.func
  };

  render() {
    return (
      <button
        className = { this.props.className }
        onClick   = { this.props.handleClick }
      >
        { this.props.caption }
      </button>
    );
  }
}
