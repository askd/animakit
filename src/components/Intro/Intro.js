import React        from 'react';

import Logo         from 'components/Logo/Logo';
import Article      from 'components/Article/Article';
import GithubButton from 'components/GithubButton/GithubButton';
import CloseButton  from 'components/CloseButton/CloseButton';

import styles from './Intro.css';

export default class Intro extends React.PureComponent {
  static propTypes = {
    component: React.PropTypes.string,
  };

  static defaultProps = {
    component: '',
  };

  state = {
    why: false,
  };

  listeners = {
    showWhy: this.showWhy.bind(this),
    hideWhy: this.hideWhy.bind(this),
  };

  showWhy() {
    this.setState({
      why: true,
    });
  }

  hideWhy() {
    this.setState({
      why: false,
    });
  }

  render() {
    const { component } = this.props;
    const isMainPage = component === '';

    let title = 'Animakit';
    let texts = [];

    switch (component) {
      case 'rotator':
        title = 'AnimakitRotator';
        texts = [
          'Rotate your components in three-dimensional space.',
          'Just wrap them with AnimakitRotator, set the side and enjoy ;)',
        ];
        break;
      case 'expander':
        title = 'AnimakitExpander';
        texts = [
          'Dreaming about easy way to expand and collapse content of your components?',
          'Feel free to use AnimakitExpander\u00A0;)',
        ];
        break;
      case 'elastic':
        title = 'AnimakitElastic';
        texts = [
          'Don\'t you like abrupt changes in the sizes?',
          'AnimakitElastic will solve this problem ;)',
        ];
        break;
      case 'slider':
        title = 'AnimakitSlider';
        texts = [
          'Do you need a simple and useful slider?',
          'Wrap your components with the AnimakitSlider and your slider is ready ;)',
        ];
        break;
      default:
        texts = [
          'React components developed to\u00A0make your site more friendly\u00A0;)',
          'Just wrap your existing UI with\u00A0Animakit components to\u00A0get transitions for\u00A0better UX.',
        ];
    }

    return (
      <div className = { isMainPage ? styles.root : styles.rootInner }>
        { isMainPage && <Logo className = { styles.logo } /> }

        { isMainPage && <h1 className = { styles.title }>
          { title }
        </h1> }

        { !isMainPage && <h2 className = { styles.title }>
          { title }
        </h2> }

        <div className = { styles.text }>
          { texts.map((text, i) => <p key={i}>{text}</p>) }
        </div>

        <div className = { styles.button }>
          <GithubButton component = {component} />
        </div>

        { isMainPage && !this.state.why &&
          <button
            type = "button"
            className = { styles.whyButton }
            onClick = { this.listeners.showWhy }
          >
            Why?
          </button>
        }

        { isMainPage && this.state.why &&
          <div className = { styles.whyPopup }>
            <Article accent>
              <h2>Why Animakit</h2>
              <p>
                Animations draw attention to and explain changes on&nbsp;the&nbsp;page.
              </p>
              <p>
                Changes in&nbsp;the&nbsp;state of&nbsp;an&nbsp;element,
                revealing and hiding of&nbsp;content, or&nbsp;shifts to&nbsp;another area of&nbsp;content
                are all common areas for&nbsp;transitional animations.
              </p>
              <p>
                The word “animation” is derived from “anima”, the&nbsp;Latin word for&nbsp;soul or&nbsp;spirit.
                The&nbsp;verb “to&nbsp;animate” literally means “to&nbsp;give life&nbsp;to”.
              </p>
              <p>
                Adding transition effects helps you to&nbsp;enliven your website
                and make&nbsp;it more pleasant to&nbsp;use.
              </p>
            </Article>
            <CloseButton
              handleClick = { this.listeners.hideWhy }
            />
          </div>
        }
      </div>
    );
  }
}
