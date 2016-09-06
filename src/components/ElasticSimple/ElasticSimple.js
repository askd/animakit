// import AnimakitElastic from 'animakit-elastic';
import AnimakitElastic from 'components/AnimakitElastic/AnimakitElastic';

import SimpleText      from 'components/SimpleText/SimpleText';

import React           from 'react';

import styles          from './ElasticSimple.css';

export default class ElasticSimple extends React.Component {
  static propTypes = {
    onlyHorizontal: React.PropTypes.bool,
  };

  static defaultProps = {
    onlyHorizontal: false,
  };

  state = {
    show:      true,
    showText:  false,
    showImage: false,
  };

  /* componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 5000);
  } */

  onToggleImage() {
    const showImage = !this.state.showImage;
    this.setState({ showImage });
  }

  onToggleText() {
    const showText = !this.state.showText;
    this.setState({ showText });
  }

  listeners = {
    onToggleImage: this.onToggleImage.bind(this),
    onToggleText:  this.onToggleText.bind(this),
  };

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitElastic>
          { this.state.show && <div className = { styles.content }>
            <SimpleText
              className    = { styles.text }
              title        = "I Got You"
              handleToggle = { this.listeners.onToggleText }
              showMore     = { this.state.showText }
              hasMore      = { !this.props.onlyHorizontal }
            />
            <div className = { this.state.showImage ? styles.imageVisible : styles.imageHidden }>
              <span
                className = { styles.more }
                onClick = { this.listeners.onToggleImage }
              >
                { this.state.showImage ? '- Image' : '+ Image' }
              </span>
            </div>
          </div> }
        </AnimakitElastic>
      </div>
    );
  }
}
