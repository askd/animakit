import ElasticDemo from 'components/ElasticDemo/ElasticDemo';
import Intro       from 'components/Intro/Intro';
import Usage       from 'components/Usage/Usage';

import React       from 'react';

export default class Elastic extends React.PureComponent {

  render() {
    return (
      <div>
        <Intro>
          <p>{ `Don't you like abrupt changes in the sizes?
          AnimakitElastic will solve this problem ;)` }</p>
        </Intro>

        <Usage component="elastic" />

        <ElasticDemo />
      </div>
    );
  }
}
