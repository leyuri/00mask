import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// redux-logger : 디버깅 할때 보려고..
import logger from 'redux-logger' 
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 만들어주기
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(logger,thunk)));


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// react-redux 바인딩 시켜주기

ReactDOM.render(
  // Provider를 넣어 이 밑의 컴포넌트들에 전부다 store가 삽입이 되는 것. 
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>

    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
ThemeProvider 내부에 있는 모든 컴포넌트들에 전해주는!
*/