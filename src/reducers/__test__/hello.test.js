import { expect } from 'chai';
import hello from '../hello';

describe('hello reducer', () => {
    it('set say', () => {
        const action = {
            type: 'SET_SAY',
            say: 'hello testing'
        };
        const nextState = hello(undefined , action);
        expect(nextState).to.deep.equal({
            say       : 'hello testing',
            githubData: 'none'
        });
    });
});