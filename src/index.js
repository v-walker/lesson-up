import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Sample from './components/Sample';

const saveToLocalStorage = (reduxGlobalState) => {
  // serialization = converting js object to a string
  try {
    const serializedState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializedState);

  } catch (err) {
    console.log(err);
  }
}

const loadFromLocalStorage = () => {
  // deserialization --> converting string to an object
  
  const state = localStorage.getItem('state');

  if (state == null) {
    return undefined;
  } else {
    return JSON.parse(state);
  }

}

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  
  // happens every time there is a change to the global state
  saveToLocalStorage(store.getState())

})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sample" element={<Sample />} />

          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

