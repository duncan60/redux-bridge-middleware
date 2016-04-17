import asyncReducer from './async-reducer';

export default function asyncMiddleware () {
    return next => action => {
        const reducerAction = asyncReducer(action);
        return next(reducerAction);
    };
}