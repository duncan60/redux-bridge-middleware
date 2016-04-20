import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from 'reducers';
import rootBridge from 'bridges';
import asyncMiddleware from 'middleware/async-middleware';
import bridgeMiddleware from 'middleware/bridge-middleware';

import Root from 'components/page/root';



const finalCreateStore = compose(
    applyMiddleware(asyncMiddleware, bridgeMiddleware(rootBridge)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
