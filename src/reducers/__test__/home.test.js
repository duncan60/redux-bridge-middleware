import { expect } from 'chai';
import home from '../home';

describe('home reducer', () => {
    it('set say', () => {
        const action = {
            type: 'SET_SAY',
            say : 'Hello Test!'
        };
        const nextState = home(undefined , action);
        expect(nextState).to.deep.equal({
            say       : 'Hello Test!',
            githubData: {},
            isPending : false
        });
    });
});
