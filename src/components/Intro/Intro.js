import React        from 'react';

import Logo         from 'components/Logo/Logo';
import GithubButton from 'components/GithubButton/GithubButton';

import styles from './Intro.css';

export default class Intro extends React.PureComponent {
  static propTypes = {
    component: React.PropTypes.string,
  };

  static defaultProps = {
    component: '',
  };

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
      </div>
    );
  }
}
