import React  from 'react';
import styles from './SimpleText.css';

export class SimpleText extends React.Component {
  static propTypes = {
    className:    React.PropTypes.string,
    title:        React.PropTypes.string,
    showMore:     React.PropTypes.bool,
    handleToggle: React.PropTypes.func
  };

  static defaultProps = {
    className: null,
    title:     null
  };

  /* state = {
    time: ''
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  } */

  render() {
    return (
      <article className = { `${ this.props.className } ${ styles.root }` }>
        { this.props.title &&
          <h2 className = { styles.title }>
            { this.props.title }
          </h2>
        }
        <div className = { styles.couplet }>
          <p>Wow! I feel good, I knew that I would now</p>
          <p>I feel good, I knew that I would now</p>
          <p>So good, so good</p>
          <p>I got you</p>
        </div>
        { this.props.showMore &&
          <div className = { styles.couplet }>
            <p>Wow! I feel nice, like sugar and spice</p>
            <p>I feel nice, like sugar and spice</p>
            <p>So nice, so nice, cause I got you</p>
          </div>
        }
        <span
          className = { styles.more }
          onClick = { this.props.handleToggle }
        >
          { this.props.showMore ? '- Couplet' : '+ Couplet' }
        </span>
      </article>
    );
  }
}
