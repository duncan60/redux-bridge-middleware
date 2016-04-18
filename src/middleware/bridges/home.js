import * as types from 'constants/ActionTypes';

const home = (lastState, action) => {
    switch (action.type) {
        case types.SET_SAY:
            const say =  action.say.toUpperCase();
            return {
                type: action.type,
                say
            };
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

export default home;