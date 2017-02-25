import ExpanderDemo from 'components/ExpanderDemo/ExpanderDemo';
import Section      from 'components/Section/Section';
import Intro        from 'components/Intro/Intro';
import Usage        from 'components/Usage/Usage';
import Article      from 'components/Article/Article';

import React        from 'react';

const Expander = () =>
  <div>

    <Section>
      <Intro component="expander" />
    </Section>

    <Section>
      <Usage component="expander" />
    </Section>

    <Section>
      <Article accent>
        <h2>Demos</h2>
      </Article>
      <ExpanderDemo />
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
              <th>Default&nbsp;Value</th>
              <th>Available&nbsp;Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>expanded</td>
              <td>true</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>State of the component: expanded or collapsed</td>
            </tr>
            <tr>
              <td>horizontal</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>If true, component will expand in horizontal direction</td>
            </tr>
            <tr>
              <td>align</td>
              <td>false</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>
                <code>top</code>,
                <code>bottom</code> for the default direction or <code>left</code>,
                <code>right</code> for the horizontal direction
              </td>
              <td>Align of the content during the animation</td>
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
              <td>durationPerPx</td>
              <td>false</td>
              <td>number</td>
              <td><code>0</code></td>
              <td>Any integer number</td>
              <td>
                Duration of animation per pixel.
                Use it if you want the duration depended on the size and calculated dynamically.
              </td>
            </tr>
            <tr>
              <td>easing</td>
              <td>false</td>
              <td>string</td>
              <td><code>ease-out</code></td>
              <td>Any <a href="http://easings.net/">easing function</a></td>
              <td>Easing function of animation</td>
            </tr>
            { false && <tr>
              <td>smoothResize</td>
              <td>false</td>
              <td>bool</td>
              <td><code>false</code></td>
              <td><code>true</code>, <code>false</code></td>
              <td>Smooth height resizing in expanded state</td>
            </tr> }
          </tbody>
        </table>
      </Article>
    </Section>

  </div>
;

export default Expander;
