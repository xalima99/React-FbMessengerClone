import {userTypes} from '../types';

const initState = {
    users: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case userTypes.GET_REALTIME_USERS_SUCCESS:
           state = {
               users: action.payload.users
           }
        default:
            return state

    }
}