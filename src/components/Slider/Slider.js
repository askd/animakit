import SliderDemo from 'components/SliderDemo/SliderDemo';
import Section    from 'components/Section/Section';
import Intro      from 'components/Intro/Intro';
import Usage      from 'components/Usage/Usage';
import Article    from 'components/Article/Article';

import React       from 'react';

const Slider = () =>
  <div>

    <Section>
      <Intro>
        <p>{ `Do you need simple slider?
        AnimakitSlider will be released soon ;)` }</p>
      </Intro>
    </Section>

    <Section>
      <Usage component="slider" />
    </Section>

    <Section>
      <Article>
        <h2>Demos</h2>
      </Article>
      <SliderDemo />
    </Section>

    <Section>
      <Article>
        <h2>Available Properties</h2>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Required</th>
              <th>Type</th>
              <th>Default Value</th>
              <th>Available Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>slide</td>
              <td>true</td>
              <td>string</td>
              <td>Key of the first child</td>
              <td>Key of the component child</td>
              <td>Current visible slide, that contains a child with the corresponding key</td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>Direction of the animation</td>
            </tr>
            <tr>
              <td>loop</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>
                If true, the component will choose the shortest way between the slides.
                (For example, it will animate directly from the last slide to first)
              </td>
            </tr>
            <tr>
              <td>skip</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>
                If true, the component will animate directly to the selected slide
                and will not show the slides located between
              </td>
            </tr>
            <tr>
              <td>flexible</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>
                If true, the component size automatically to fit the current slide.
                By default, the component selects the size of the largest slide.
              </td>
            </tr>
            <tr>
              <td>duration</td>
              <td>false</td>
              <td>number</td>
              <td><code>500</code></td>
              <td>Any integer number</td>
              <td>Duration of animation</td>
            </tr>
            <tr>
              <td>easing</td>
              <td>false</td>
              <td>string</td>
              <td><code>cubic-bezier(.165,.84,.44,1)</code></td>
              <td>Any <a href="http://easings.net/">easing function</a></td>
              <td>Easing function of animation</td>
            </tr>
          </tbody>
        </table>
      </Article>
    </Section>

  </div>
;

export default Slider;
