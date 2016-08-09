import RotatorDemo from 'components/RotatorDemo/RotatorDemo';
import Intro       from 'components/Intro/Intro';

import React       from 'react';

export default class Rotator extends React.PureComponent {

  render() {
    return (
      <div>
        <Intro>
          <p>Rotate your components in three-dimensional space.
          Just wrap them with AnimakitRotator, set the side and enjoy ;)</p>
        </Intro>

        <RotatorDemo />
      </div>
    );
  }
}
