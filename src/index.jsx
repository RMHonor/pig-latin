import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Input from './components/input/input';

// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Input />
  </Provider>,
  document.querySelector('#root'),
);