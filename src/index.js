import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import App from 'components/App/App';
import Main from 'components/Main/Main';
import Rotator from 'components/Rotator/Rotator';
import Expander from 'components/Expander/Expander';
import Elastic from 'components/Elastic/Elastic';
import Slider from 'components/Slider/Slider';

import './reset.css';

render((
  <HashRouter>
    <App>
      <Route exact path="/" component={ Main } />
      <Route path="/rotator" component={ Rotator } />
      <Route path="/expander" component={ Expander } />
      <Route path="/elastic" component={ Elastic } />
      <Route path="/slider" component={ Slider } />
    </App>
  </HashRouter>
), document.getElementById('root'));
