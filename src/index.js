import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import CreatePlan from './components/CreatePlan';
import ViewPlans from './components/ViewPlans';
import PlanPrintList from './components/PlanPrintList';
import About from './components/About'

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

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
            <Route path="/create" element={<CreatePlan />} />
            <Route path="/view_plans" element={<ViewPlans />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/print_plans" element={<PlanPrintList />} />
            <Route />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

