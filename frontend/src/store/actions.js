import { SET_AUTH,  DELETE_AUTH, CREATE_USER } from './constants';
import axios from 'axios';

const setAuth = (auth) => {
    return { 
        type: SET_AUTH, 
        auth
      }
}

const deleteAuth = () => {
    return { 
        type: DELETE_AUTH, 
        auth: {}
    }
}

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  }
}

const attemptLogin = (credentials, history)=> {
  return async(dispatch)=> {
    const {token} = (await axios.post('/api/sessions', credentials)).data;
    window.localStorage.setItem('token', token);
    await dispatch(attemptSessionLogin());
    history.push('/');
  };
};

const attemptSessionLogin = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token')
    // console.log(token)
    const auth = (await axios.get('/api/sessions', {headers: {'authorization': token}})).data;
    dispatch(setAuth(auth));
  };
};

const logout = ()=> {
  return async(dispatch)=> {
    window.localStorage.removeItem('token');
    dispatch(deleteAuth());
  };
};

const register = (newUser) => {
  return async (dispatch) => {
    const user = (await axios.post('/signup', newUser)).data;
    dispatch(createUser(user));
  }
}

export { attemptLogin, attemptSessionLogin, logout, register}