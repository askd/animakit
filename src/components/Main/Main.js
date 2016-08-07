import Code             from 'components/Code/Code';
import CodeBlock        from 'components/Code/CodeBlock';

import React            from 'react';
import { Link }         from 'react-router';

import AnimakitRotator  from 'animakit-rotator';
import AnimakitExpander from 'animakit-expander';
import AnimakitElastic  from 'animakit-elastic';

import styles           from './Main.css';

export default class App extends React.Component {
  static propTypes = {
    components: React.PropTypes.array,
    routes:     React.PropTypes.array,
    params:     React.PropTypes.any,
  };

  static defaultProps = {
    components: ['rotator', 'expander', 'elastic'],
  };

  state = {
    animationActive:   false,
    animatedComponent: null,
    rotatorSide:       0,
    expanderCollapsed: false,
    elasticPhase:      0,
  };

  componentWillMount() {
    this.props.components.forEach(component => {
      this.listeners.toggleAnimation[component] = this.toggleComponent.bind(this, component);
    }, this);
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  toggleComponent(component) {
    let { animationActive, animatedComponent } = this.state;

    if (animationActive && animatedComponent === component) {
      animationActive = false;
      animatedComponent = null;
    } else {
      animationActive = true;
      animatedComponent = component;
    }

    this.setState({ animationActive, animatedComponent });

    this.stopAnimation();

    if (animationActive) {
      this.startAnimation();
    }
  }

  listeners = {
    toggleAnimation: {},
  };

  startAnimation() {
    this.animationRAF = requestAnimationFrame(() => {
      this.animateComponent();
    });
    this.animationTO = setInterval(() => {
      this.animationRAF = requestAnimationFrame(() => {
        this.animateComponent();
      });
    }, 3000);
  }

  stopAnimation() {
    if (this.animationRAF) cancelAnimationFrame(this.animationRAF);
    if (this.animationTO) clearInterval(this.animationTO);
  }

  animateComponent() {
    if (this.state.animatedComponent === 'rotator') {
      let rotatorSide = this.state.rotatorSide + 1;
      if (rotatorSide === 5) rotatorSide = 0;
      this.setState({ rotatorSide });
    }

    if (this.state.animatedComponent === 'expander') {
      const expanderCollapsed =  !this.state.expanderCollapsed;
      this.setState({ expanderCollapsed });
    }

    if (this.state.animatedComponent === 'elastic') {
      let elasticPhase = this.state.elasticPhase + 1;
      if (elasticPhase === 4) elasticPhase = 0;
      this.setState({ elasticPhase });
    }
  }

  render() {
    const animation = {};
    const { animationActive, animatedComponent } = this.state;
    this.props.components.forEach(component => {
      animation[component] = (animationActive && animatedComponent === component);
    });

    return (
      <main className = { styles.root }>

        <div className = { styles.block }>
          <div className = { styles.intro }>
            <p>React components developed to&nbsp;make your site more friendly&nbsp;;)</p>
            <p>Just wrap your existing UI with&nbsp;Animakit components to&nbsp;get transitions for&nbsp;better UX.</p>
          </div>
        </div>

        <div className = { styles.block }>
          <div className = { styles.use }>
            <h2 className = { styles.title }>Easy to use</h2>
            <ol className = { styles.useList }>
              <li className = { styles.useItem }>
                <p className = { styles.useItemTitle }>Install</p>
                <Code>
                  <CodeBlock
                    highlight
                  >
                    { 'npm install animakit-component' }
                  </CodeBlock>
                </Code>
              </li>
              <li className = { styles.useItem }>
                <p className = { styles.useItemTitle }>Import</p>
                <Code>
                  <CodeBlock
                    highlight
                    language = { 'javascript' }
                  >
                    { "import AnimakitComponent from 'animakit-component';" }
                  </CodeBlock>
                </Code>
              </li>
              <li className = { styles.useItem }>
                <p className = { styles.useItemTitle }>Wrap</p>
                <Code>
                  <CodeBlock
                    highlight
                  >
                    {
`<AnimakitComponent>
  <YourContent />
</AnimakitComponent>`
                    }
                  </CodeBlock>
                </Code>
              </li>
            </ol>
          </div>
        </div>

        <div className = { styles.block }>
          <article className = { styles.article }>
            <h2 className={ styles.title }>The reason to use</h2>
            <p>
              The word “animation” is derived from “anima”, the&nbsp;Latin word for&nbsp;soul or&nbsp;spirit.
              The verb “to&nbsp;animate” literally means “to&nbsp;give life&nbsp;to”.
            </p>
            <p>
              Adding transition effects helps you to&nbsp;enliven your website
              and make&nbsp;it more pleasant to&nbsp;use.
            </p>
          </article>
        </div>

        <div className = { styles.block }>
          <nav className = { styles.nav }>
            <ul className = { styles.navList }>
              <li className = { styles.navItemRotator }>
                <div
                  className = { animation.rotator ? styles.navLauncherActive : styles.navLauncher }
                  onClick = { this.listeners.toggleAnimation.rotator }
                />
                <Link
                  to = "/rotator"
                  className = { styles.navLink }
                >
                  <div className = { styles.navComponent }>
                    <div className = { styles.rotator }>
                      <AnimakitRotator
                        side = { this.state.rotatorSide }
                        shadow
                      >
                        { Array.from(new Array(5), (_, i) =>
                          <div className = { styles.rotatorSide } key = { (i + 1) }>
                            { this.state.rotatorSide === i ? 'Rotator' : '' }
                          </div>
                        )}
                      </AnimakitRotator>
                    </div>
                  </div>
                  <p className = { styles.navText }>
                    Rotate
                    <br />
                    your components
                    <br />
                    in 3D space
                  </p>
                </Link>
              </li>
              <li className = { styles.navItemExpander }>
                <div
                  className = { animation.expander ? styles.navLauncherActive : styles.navLauncher }
                  onClick = { this.listeners.toggleAnimation.expander }
                />
                <Link
                  to = "/expander"
                  className = { styles.navLink }
                >
                  <div className = { styles.navComponent }>
                    <div className = { styles.expander }>
                      <div className = { styles.expanderContainer }>
                        <AnimakitExpander
                          expanded = { !this.state.expanderCollapsed }
                        >
                          <div
                            className = { styles.expanderContent }
                          />
                        </AnimakitExpander>
                      </div>
                      <div className = { styles.expanderTitle }>Expander</div>
                    </div>
                  </div>
                  <p className = { styles.navText }>
                    Expand and collapse
                    <br />
                    the content
                    <br />
                    of your components
                  </p>
                </Link>
              </li>
              <li className = { styles.navItemElastic }>
                <div
                  className = { animation.elastic ? styles.navLauncherActive : styles.navLauncher }
                  onClick = { this.listeners.toggleAnimation.elastic }
                />
                <Link
                  to = "/elastic"
                  className = { styles.navLink }
                >
                  <div className = { styles.navComponent }>
                    <div className = { styles.elastic }>
                      <div className = { styles.elasticContainer }>
                        <div className = { styles.elasticContainerIn }>
                          <AnimakitElastic>
                            <div
                              className = { styles[`elasticContent${this.state.elasticPhase}`] }
                            />
                          </AnimakitElastic>
                          <div className = { styles.elasticTitle }>Elastic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className = { styles.navText }>
                    Make the content
                    <br />
                    of your components
                    <br />
                    elastic
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className = { styles.block }>
          <article className = { styles.article }>
            <h2 className={ styles.title }>FAQ</h2>

            <dl>
              <dt>Do I need to install the whole Animakit to use one of the components?</dt>
              <dd>
                No. All components are independent and developed for separate use.
              </dd>

              <dt>Could I request to add one more component to Animakit?</dt>
              <dd>
                Yes. Feel free to leave an&nbsp;<a href="https://github.com/animakit/animakit-core/issues">issue</a> ;)
              </dd>
            </dl>
          </article>
        </div>

      </main>
    );
  }
}
