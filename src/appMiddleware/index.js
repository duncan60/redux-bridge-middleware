import 'es6-promise';
import 'isomorphic-fetch';
//import asyncReducer from './async-reducer';

export default function appMiddleware () {
    return next => action => {
        const { fetchAPI, types } = action;
        if (!fetchAPI) {
            return next(action);
        }
        const [ success, failure, pending ] = types;
        const fetchSetting = {
            headers: {
                'Content-Type': 'application/json'
            },
            method : fetchAPI.method,
            body   : JSON.stringify(fetchAPI.body)
        };
        next(pending());
        fetch(fetchAPI.path, fetchSetting)
            .then(response => response.json())
            .then((json) => {
                if (json.message === 'Not Found') {
                    next(failure(json));
                } else {
                    //const reducerData = asyncReducer(success(json));
                    next(success(json));
                }
            })
            .catch((err) => {
                next(failure(err));
            });
    };
}