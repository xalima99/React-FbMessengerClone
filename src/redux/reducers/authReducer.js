import {authTypes} from '../types';

const initState = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
    authenticating: false,
    authenticated: false,
    error: null,
    isOnline: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case authTypes.SIGN_IN_REQUEST:
            return {
                ...state,
                authenticating: true
            }
            break;
        case authTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.payload.user,
                authenticated: true,
                authenticating: false,
                isOnline: true
            }
        case authTypes.SIGN_IN_FAILURE:
            return {
                ...state, 
                authenticated: false,
                authenticating: false,
                isOnline: false,
                error: action.payload.error
            }
        case 'LOGOUT_SUCCESS':
            return {
                firstName: '',
                lastName: '',
                email: '',
                authenticating: false,
                authenticated: false,
                isOnline: false,
                error: null
            }
        case 'LOGOUT_ERROR':
            return {
                firstName: '',
                lastName: '',
                email: '',
                authenticating: false,
                authenticated: false,
                isOnline: false,
                error: action.payload.error
            }
        default:
            return state
            break;
    }
}