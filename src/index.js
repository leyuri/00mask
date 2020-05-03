import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// redux-logger : 디버깅 할때 보려고..
import logger from 'redux-logger' 



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';


// store 만들어주기
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

// react-redux 바인딩 시켜주기

ReactDOM.render(
  // Provider를 넣어 이 밑의 컴포넌트들에 전부다 store가 삽입이 되는 것. 
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
