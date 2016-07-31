import React           from 'react';
import styles          from './ElasticSimple.css';
import { SimpleText }  from 'components/SimpleText/SimpleText';
import AnimakitElastic from /* 'components/AnimakitElastic/AnimakitElastic'; */ 'animakit-elastic';

export class ElasticSimple extends React.Component {
  state = {
    // show:      false,
    showText:  false,
    showImage: false
  };

  listeners = {
    onToggleImage: this.onToggleImage.bind(this),
    onToggleText:  this.onToggleText.bind(this)
  };

  onToggleImage() {
    const showImage = !this.state.showImage;
    this.setState({ showImage });
  }

  onToggleText() {
    const showText = !this.state.showText;
    this.setState({ showText });
  }

  /* componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 5000);
  } */

  render() {
    return (
      <div className = { styles.root }>
        <AnimakitElastic>
          { <div className = { styles.content }>
            <SimpleText
              className    = { styles.text }
              title        = "I Got You"
              handleToggle = { this.listeners.onToggleText }
              showMore     = { this.state.showText }
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