import React                          from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render }                     from 'react-dom';
import { App }                        from 'components/App/App';
import { Rotator }                    from 'components/Rotator/Rotator';
import { Expander }                   from 'components/Expander/Expander';

import './reset.css';

// <Route path="*" component={ NoMatch }/>
render((
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/rotator" component={ Rotator } />
      <Route path="/expander" component={ Expander } />
    </Route>
  </Router>
), document.getElementById('root'));
