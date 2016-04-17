import * as types from 'constants/ActionTypes';

const asyncReducer = (action) => {
    switch (action.type) {
        case types.FETCH_SUCCESSED:
            /*
            * can do more thing, and handle Json data format
            */
            const url = action.url.current_user_url;
            return {
                type: action.type,
                url
            };
        default:
            return action;
    };
};

export default asyncReducer;