import axios from 'axios';
import {
  SET_AUTH,
  DELETE_AUTH,
  CREATE_USER,
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
} from './constants';

const setAuth = (auth) => ({
  type: SET_AUTH,
  auth,
});

const deleteAuth = () => ({
  type: DELETE_AUTH,
  auth: {},
});

const createUser = (user) => ({
  type: CREATE_USER,
  user,
});

const attemptSessionLogin = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    const auth = (await axios.get('/api/sessions', {
      headers: { authorization: token },
    })).data;
    dispatch(setAuth(auth));
  }
};

const attemptLogin = (credentials, history) => async (dispatch) => {
  const { token } = (await axios.post('/api/sessions', credentials)).data;
  window.localStorage.setItem('token', token);
  await dispatch(attemptSessionLogin());
  history.push('/');
};

const logout = () => async (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch(deleteAuth());
};

const register = (newUser) => async (dispatch) => {
  const user = (await axios.post('/signup', newUser)).data;
  dispatch(createUser(user));
};

const fetchCategories = () => async (dispatch) => {
  const categories = (await axios.get('/api/categories')).data;
  dispatch({ type: SET_CATEGORIES, categories });
};

const fetchProducts = () => async (dispatch) => {
  const products = (await axios.get('/api/products')).data;
  dispatch({ type: SET_PRODUCTS, products });
};

const fetchOrders = () => async (dispatch) => {
  const orders = (await axios.get('/api/orders')).data;
  dispatch({ type: SET_ORDERS, orders });
};

const createOrder = (order) => async (dispatch) => {
  const created = (await axios.post('/api/orders', { order })).data;
  dispatch({ type: CREATE_ORDER, order: created });
};

const updateOrder = (order) => async (dispatch) => {
  const updated = (await axios.put(`/api/orders/${order.id}`, { order })).data;
  dispatch({ type: UPDATE_ORDER, order: updated });
};

const deleteOrder = (order) => async (dispatch) => {
  await axios.delete(`/api/orders/${order.id}`);
  dispatch({ type: DELETE_ORDER, order });
};

export {
  fetchCategories,
  fetchProducts,
  fetchOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  attemptLogin,
  attemptSessionLogin,
  logout,
  register,
};
