import {combineReducers} from 'redux';
import { SET_AUTH, DELETE_AUTH, CREATE_USER } from './constants';

/* need to revise state -- don't pass entire */
const authReducer = (state = {}, action) => {
    switch(action.type){
        case SET_AUTH : 
            return {...state, ... action.auth}
        case DELETE_AUTH : 
            return {... action.auth}
        default:
          return state;
    }
}

const userReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_USER : 
            return action.user
    }
    return state
}

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

export default reducer;