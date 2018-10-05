import React from 'react';

import 'config/ReactotronConfig';

import Routes from 'routes';

import { Provider } from 'react-redux';

import store from 'store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
