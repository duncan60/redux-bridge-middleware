import { combineReducers } from 'redux';
import home from './bridges/home';

const rootBridges = combineReducers({
    home
});

export default function bridgeMiddleware (store) {
    return next => action => {
        const reducerAction = action.birdgeKey ?
            rootBridges(
                store.getState(),
                action
            )[action.birdgeKey] :
            action;
        return next(reducerAction);
    };
}