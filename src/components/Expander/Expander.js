import ExpanderDemo from 'components/ExpanderDemo/ExpanderDemo';
import Intro        from 'components/Intro/Intro';

import React        from 'react';

export default class Expander extends React.PureComponent {

  render() {
    return (
      <div>
        <Intro>
          <p>Dreaming about easy way to expand and collapse content of your components?
          Feel free to use AnimakitExpander ;)</p>
        </Intro>

        <ExpanderDemo />
      </div>
    );
  }
}
