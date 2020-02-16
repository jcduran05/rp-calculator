import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import UserProvider from './Providers/UserProvider';
import { BrowserRouter as Router } from 'react-router-dom';

render(
    <Router>
      <UserProvider>
        {/* <PropertiesProvider> */}
          <App />
        {/* </PropertiesProvider> */}
      </UserProvider>
    </Router>,
    document.getElementById('root'),
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
