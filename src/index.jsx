import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Input from './components/input/input';
import List from './components/list/list';

import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Input />
      <List />
    </div>
  </Provider>,
  document.querySelector('#root'),
);