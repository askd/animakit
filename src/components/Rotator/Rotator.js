import RotatorDemo from 'components/RotatorDemo/RotatorDemo';
import Section     from 'components/Section/Section';
import Intro       from 'components/Intro/Intro';
import Usage       from 'components/Usage/Usage';
import Article     from 'components/Article/Article';

import React       from 'react';

const Rotator = () =>
  <div>

    <Section>
      <Intro>
        <p>Rotate your components in three-dimensional space.
        Just wrap them with AnimakitRotator, set the side and enjoy ;)</p>
      </Intro>
    </Section>

    <Section>
      <Usage component="rotator" />
    </Section>

    <Section>
      <Article>
        <h2>Demos</h2>
      </Article>
      <RotatorDemo />
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
              <td>side</td>
              <td>true</td>
              <td>string</td>
              <td>Key of the first child</td>
              <td>Key of the component child</td>
              <td>Current visible side, that contains a child with the corresponding key</td>
            </tr>
            <tr>
              <td>axis</td>
              <td>false</td>
              <td>string</td>
              <td><code>X</code></td>
              <td><code>X</code>, <code>Y</code></td>
              <td>Axis of rotation</td>
            </tr>
            <tr>
              <td>shadow</td>
              <td>false</td>
              <td>bool</td>
              <td>&nbsp;</td>
              <td><code>true</code>, <code>false</code></td>
              <td>
                Shadow on the rotator side. If you use 4 or less sides, it will be visible only while rotation
              </td>
            </tr>
            <tr>
              <td>background</td>
              <td>false</td>
              <td>string</td>
              <td>&nbsp;</td>
              <td>Any color in hexadecimal format</td>
              <td>Color of the rotator side, transparent by default</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>false</td>
              <td>number</td>
              <td><code>1000</code></td>
              <td>Any integer number</td>
              <td>Duration of rotation</td>
            </tr>
            <tr>
              <td>easing</td>
              <td>false</td>
              <td>string</td>
              <td><code>cubic-bezier(.165, .84, .44, 1)</code></td>
              <td>Any <a href="http://easings.net/">easing function</a></td>
              <td>Easing function of rotation</td>
            </tr>
          </tbody>
        </table>
      </Article>
    </Section>

  </div>
;

export default Rotator;
