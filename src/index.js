import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Comp/Todo';
import { Provider } from 'react-redux';
import Store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={Store}>
  <Todo/>
</Provider>
  
);

