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
            const testData = {
                  ids: 1,
                  title: 'Some Article',
                  author: {
                    id: 7,
                    name: 'Dan'
                  },
                  contributors: [{
                    id: 10,
                    name: 'Abe',
                    commit:10
                  }, {
                    id: 15,
                    name: 'Fred',
                    commit: 20
                  }]
            };
            const article = new Schema('articles', { idAttribute: 'ids', defaults: { likes: 0 } });
            const user = new Schema('users', { defaults: { commit: 0 }});
            article.define({
              author: user,
              contributors: arrayOf(user)
            });
            const normalizeTest = normalize(testData, article);
            console.log('normalizeTest>>>', normalizeTest);
            return {
                type: action.type,
                url
            };
        default:
            return action;
    };
};

export default home;
