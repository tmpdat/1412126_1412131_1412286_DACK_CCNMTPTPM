import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import blockChainApp from './reducers';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';

const loggerMiddleware = createLogger();

const store = createStore(
    blockChainApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)