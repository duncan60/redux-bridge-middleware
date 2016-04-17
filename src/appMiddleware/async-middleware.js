import asyncReducer from './async-reducer';

export default function asyncMiddleware () {
    return next => action => {
        const reducerAction = {
            type: action.type,
            data: asyncReducer(action)
        };
        return next(reducerAction);
    };
}