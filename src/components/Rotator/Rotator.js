import React       from 'react';

import RotatorDemo from 'components/RotatorDemo/RotatorDemo';
import Section     from 'components/Section/Section';
import Intro       from 'components/Intro/Intro';
import Usage       from 'components/Usage/Usage';
import Article     from 'components/Article/Article';
import CloseButton from 'components/CloseButton/CloseButton';

import styles      from './Rotator.css';

export default class Rotator extends React.Component {
  state = {
    playground: false,
  };

  listeners = {
    showPlayground: this.showPlayground.bind(this),
    hidePlayground: this.hidePlayground.bind(this),
  };

  showPlayground() {
    this.setState({
      playground: true,
    });
  }

  hidePlayground() {
    this.setState({
      playground: false,
    });
  }

  render() {
    return (
      <div>

        <Section>
          <Intro component = "rotator" />
          { !this.state.playground &&
            <button
              type = "button"
              className = { styles.playground }
              onClick = { this.listeners.showPlayground }
            >
              Playground
            </button>
          }
          { this.state.playground &&
            <CloseButton
              handleClick = { this.listeners.hidePlayground }
            />
          }
        </Section>

        <Section>
          <Usage component="rotator" />
        </Section>

        <Section>
          <Article accent>
            <h2>Demos</h2>
          </Article>
          <RotatorDemo playground = { this.state.playground } />
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
                  <th>Available&nbsp;Values</th>
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
                  <td><code>cubic-bezier (.165,.84,.44,1)</code></td>
                  <td>Any <a href="http://easings.net/">easing function</a></td>
                  <td>Easing function of rotation</td>
                </tr>
              </tbody>
            </table>
          </Article>
        </Section>

      </div>
    );
  }
}
