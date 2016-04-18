import * as types from 'constants/ActionTypes';

const BRIDGE_KEY = 'home';

let fetchSuccessed = (url) => {
    return {
        type     : types.FETCH_SUCCESSED,
        birdgeKey: BRIDGE_KEY,
        url
    };
};

let fetchFailed = () => {
    return {
        type     : types.FETCH_FAILED,
        birdgeKey: BRIDGE_KEY,
    };
};

let fetchPending = () => {
    return {
        type     : types.FEATCH_PENDING,
        isPending: true
    };
};

export const setSay = (say) => {
    return {
        type     : types.SET_SAY,
        birdgeKey: BRIDGE_KEY,
        say
    };
};

export function fetchAPI() {
    return {
        types    : [fetchSuccessed, fetchFailed, fetchPending],
        fetchAPI : {
            path  : 'https://api.github.com',
            method: 'GET'
        }
    };
}