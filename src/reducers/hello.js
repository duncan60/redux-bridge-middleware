import * as types from '../constants/ActionTypes';

let initialState = {
    say       : 'Hello React Redux Word!',
    githubData: 'none',
    isPending : false
};

const hello = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SAY:
            return {
                ...state,
                say: action.say
            };
        case types.FEATCH_PENDING:
            return {
                ...state,
                isPending: action.isPending
            };
        case types.FETCH_SUCCESSED:
            return {
                ...state,
                isPending : false,
                githubData: action.data
            };
        default:
            return state;
    };
};

export default hello;
