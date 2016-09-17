import * as types from 'constants/ActionTypes';
import { normalize, Schema, arrayOf } from 'normalizr';

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

            return {
                type: action.type,
                url : action.url
            };
        default:
            return action;
    };
};

export default home;
