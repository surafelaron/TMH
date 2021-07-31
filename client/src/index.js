import React from 'react';
// import { Provider } from 'react-redux';
import { ContextProvider } from "./actions/Context"
import ReactDOM from 'react-dom';
import store from "./store"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


