import * as types from 'constants/ActionTypes';


let fetchSuccessed = (json) => {
    return {
        type: types.FETCH_SUCCESSED,
        data: json
    };
};

let fetchFailed = () => {
    return {
        type: types.FETCH_FAILED
    };
};

export const setSay = (say) => {
    return {
        type: types.SET_SAY,
        say
    };
};

export function fetchAPI() {
    return {
        types   : [fetchSuccessed, fetchFailed],
        fetchAPI: {
            path  : 'https://api.github.com',
            method: 'GET'
        }
    };
}