import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from 'reducers';
import appMiddleware from 'appMiddleware/app-middleware';
import asyncMiddleware from 'appMiddleware/async-middleware';

import Root from 'components/containers/Root';


const finalCreateStore = compose(
    applyMiddleware(appMiddleware, asyncMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
