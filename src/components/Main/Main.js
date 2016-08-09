import RotatorDemo  from 'components/RotatorDemo/RotatorDemo';
import ExpanderDemo from 'components/ExpanderDemo/ExpanderDemo';
import ElasticDemo  from 'components/ElasticDemo/ElasticDemo';
import Code         from 'components/Code/Code';
import CodeBlock    from 'components/Code/CodeBlock';

import React        from 'react';
import { Link }     from 'react-router';

import styles       from './Main.css';

export default class App extends React.PureComponent {
  static propTypes = {
    routes: React.PropTypes.array,
    params: React.PropTypes.any,
  };

  render() {
    return (
      <main className = { styles.root }>

        <div className = { styles.block }>
          <div className = { styles.intro }>
            <p>React components developed to&nbsp;make your site more friendly&nbsp;;)</p>
            <p>Just wrap your existing UI with&nbsp;Animakit components to&nbsp;get transitions for&nbsp;better UX.</p>
          </div>
        </div>

        <div className = { styles.blockUse }>
          <div className = { styles.use }>
            <h2 className = { styles.title }>Easy to use</h2>
            <ol className = { styles.useList }>
              <li className = { styles.useItem }>
                <p className = { styles.useItemTitle }>Install</p>
                <Code>
                  <CodeBlock
                    highlight
                  >
                    { 'npm install animakit-rotator' }
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
                    { "import AnimakitRotator from 'animakit-rotator';" }
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
`<AnimakitRotator side={this.state.loading}>
  <Button />
  <Loader />
</AnimakitRotator>`
                    }
                  </CodeBlock>
                </Code>
              </li>
            </ol>
          </div>
        </div>

        <div className = { styles.block }>
          <article className = { styles.article }>
            <h2 className = { styles.title }>Choose one to start</h2>
            <p>
              Try out the simple demo or click “Learn More” for more demos.
            </p>
          </article>
        </div>

        <div className = { styles.blockDemo }>
          <nav className = { styles.nav }>
            <ul className = { styles.navList }>
              <li className = { styles.navItem }>
                <h3 className = { styles.navTitle }>AnimakitRotator</h3>
                <p className = { styles.navText }>
                  Rotate your components in 3D space
                </p>
                <Link
                  to = "/rotator"
                  className = { styles.navMore }
                >
                  Learn more
                </Link>
                <div className = { styles.navComponent }>
                  <RotatorDemo onlyOne />
                </div>
              </li>
              <li className = { styles.navItem }>
                <h3 className = { styles.navTitle }>AnimakitExpander</h3>
                <p className = { styles.navText }>
                  Expand and collapse the content of your components
                </p>
                <Link
                  to = "/expander"
                  className = { styles.navMore }
                >
                  Learn more
                </Link>
                <div className = { styles.navComponent }>
                  <ExpanderDemo onlyOne />
                </div>
              </li>
              <li className = { styles.navItem }>
                <h3 className = { styles.navTitle }>AnimakitElastic</h3>
                <p className = { styles.navText }>
                  Make the content of your components elastic
                </p>
                <Link
                  to = "/elastic"
                  className = { styles.navMore }
                >
                  Learn more
                </Link>
                <div className = { styles.navComponent }>
                  <ElasticDemo onlyOne />
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className = { styles.block }>
          <article className = { styles.article }>
            <h2 className={ styles.title }>The reason to use</h2>
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
          </article>
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
