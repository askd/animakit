import RotatorDemo  from 'components/RotatorDemo/RotatorDemo';
import ExpanderDemo from 'components/ExpanderDemo/ExpanderDemo';
import ElasticDemo  from 'components/ElasticDemo/ElasticDemo';
import SliderDemo   from 'components/SliderDemo/SliderDemo';
import Section      from 'components/Section/Section';
import Intro        from 'components/Intro/Intro';
import Usage        from 'components/Usage/Usage';
import Article      from 'components/Article/Article';
import Ribbon       from 'components/Ribbon/Ribbon';

import React        from 'react';
import { Link }     from 'react-router';

import styles       from './Main.css';

const Main = () =>
  <main className = { styles.root }>

    <Section>
      <Intro>
        <p>React components developed to&nbsp;make your site more friendly&nbsp;;)</p>
        <p>Just wrap your existing UI with&nbsp;Animakit components to&nbsp;get transitions for&nbsp;better UX.</p>
      </Intro>
    </Section>

    <Section>
      <Usage />
    </Section>

    <Section>
      <Article>
        <h2>Choose one to start</h2>
        <p>
          Try out the simple demo or click “Learn More” for more demos.
        </p>
      </Article>

      <nav className = { styles.nav }>
        <ul className = { styles.navList }>
          <li className = { styles.navItem }>
            <div className = { styles.navHeading }>
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
            </div>
            <div className = { styles.navComponent }>
              <RotatorDemo onlyOne />
            </div>
            <Ribbon path={ 'rotator' } />
          </li>
          <li className = { styles.navItem }>
            <div className = { styles.navHeading }>
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
            </div>
            <div className = { styles.navComponent }>
              <ExpanderDemo onlyOne />
            </div>
            <Ribbon path={ 'expander' } />
          </li>
          <li className = { styles.navItem }>
            <div className = { styles.navHeading }>
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
            </div>
            <div className = { styles.navComponent }>
              <ElasticDemo onlyOne />
            </div>
            <Ribbon path={ 'elastic' } />
          </li>
          <li className = { styles.navItem }>
            <div className = { styles.navHeading }>
              <h3 className = { styles.navTitle }>AnimakitSlider</h3>
              <p className = { styles.navText }>
                Slide your components easily
              </p>
              <Link
                to = "/slider"
                className = { styles.navMore }
              >
                Learn more
              </Link>
            </div>
            <div className = { styles.navComponent }>
              <SliderDemo onlyOne />
            </div>
            <Ribbon path={ 'slider' } />
          </li>
        </ul>
      </nav>
    </Section>

    <Section>
      <Article>
        <h2>The reason to use</h2>
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
    </Section>

    <Section>
      <Article>
        <h2>FAQ</h2>

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
      </Article>
    </Section>

  </main>
;

export default Main;
