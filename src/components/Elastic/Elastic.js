import ElasticDemo from 'components/ElasticDemo/ElasticDemo';
import Intro       from 'components/Intro/Intro';

import React       from 'react';

export default class Elastic extends React.PureComponent {

  render() {
    return (
      <div>
        <Intro>
          <p>{ `Don't you like abrupt changes in the sizes?
          AnimakitElastic will solve this problem ;)` }</p>
        </Intro>

        <ElasticDemo />
      </div>
    );
  }
}
