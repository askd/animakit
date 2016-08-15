import ElasticDemo from 'components/ElasticDemo/ElasticDemo';
import Section     from 'components/Section/Section';
import Intro       from 'components/Intro/Intro';
import Usage       from 'components/Usage/Usage';
import Article     from 'components/Article/Article';

import React       from 'react';

export default class Elastic extends React.PureComponent {

  render() {
    return (
      <div>

        <Section>
          <Intro>
            <p>{ `Don't you like abrupt changes in the sizes?
            AnimakitElastic will solve this problem ;)` }</p>
          </Intro>
        </Section>

        <Section>
          <Usage component="elastic" />
        </Section>

        <Section>
          <Article>
            <h2>Demos</h2>
          </Article>
          <ElasticDemo />
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
                  <td><code>ease-out</code></td>
                  <td>Any <a href="http://easings.net/">easing function</a></td>
                  <td>Easing function of animation</td>
                </tr>
              </tbody>
            </table>
          </Article>
        </Section>

      </div>
    );
  }
}
