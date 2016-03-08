import React from 'react';
import {render} from 'react-dom';

import App from './components/App.jsx';
import StateWrapper from './components/StateWrapper.jsx';

render((
    <App>
      <StateWrapper active={true}/>
    </App>
), document.getElementById('container'));
