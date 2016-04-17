import * as types from '../constants/ActionTypes';

let initialState = {
    say       : 'Hello React Redux Word!',
    githubData: 'none'
};

const hello = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SAY:
            return {
                ...state,
                say: action.say
            };
        case types.FETCH_SUCCESSED:
            return {
                ...state,
                githubData: action.data.current_user_url
            };
        default:
            return state;
    };
};

export default hello;
