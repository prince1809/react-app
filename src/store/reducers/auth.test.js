import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';


describe('auth reducer', () => {
    it('should return the initial state', function () {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store token upon login', function () {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'sometoken',
            userId: 'someuser'
        })).toEqual({
            token: 'sometoken',
            userId: 'someuser',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});