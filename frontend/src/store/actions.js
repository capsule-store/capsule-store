import axios from 'axios';
import {
  SET_AUTH,
  DELETE_AUTH,
  CREATE_USER,
  SET_BRANDS,
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  SET_CART,
  ADD_LINEITEM,
  UPDATE_LINEITEM,
  DELETE_LINEITEM,
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

const logout = (history) => async (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch(deleteAuth());
  history.push('/');
};

const register = (newUser) => async (dispatch) => {
  const user = (await axios.post('/signup', newUser)).data;
  dispatch(createUser(user));
};

const fetchBrands = () => async (dispatch) => {
  const brands = (await axios.get('/api/brands')).data;
  dispatch({ type: SET_BRANDS, brands });
};

const fetchCategories = () => async (dispatch) => {
  const categories = (await axios.get('/api/categories')).data;
  dispatch({ type: SET_CATEGORIES, categories });
};

const fetchProducts = () => async (dispatch) => {
  const products = (await axios.get('/api/products')).data;
  dispatch({ type: SET_PRODUCTS, products });
};

const fetchOrders = (userId) => async (dispatch) => {
  const orders = (await axios.get(`/api/users/${userId}/orders`)).data;
  dispatch({ type: SET_ORDERS, orders });
};

const createOrder = (userId, order) => async (dispatch) => {
  const created = (await axios.post(`/api/users/${userId}/orders`, { order }))
    .data;
  dispatch({ type: CREATE_ORDER, order: created });
};

const updateOrder = (userId, order) => async (dispatch) => {
  const updated = (await axios.put(`/api/users/${userId}/orders/${order.id}`, {
    order,
  })).data;
  dispatch({ type: UPDATE_ORDER, order: updated });
};

const deleteOrder = (userId, order) => async (dispatch) => {
  await axios.delete(`/api/users/${userId}/orders/${order.id}`);
  dispatch({ type: DELETE_ORDER, order });
};

const fetchCart = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const cart = (await axios.get('/api/cart/', { headers: { token } })).data;
  dispatch({ type: SET_CART, cart });
};

const updateLineItem = (id, quantity) => async (dispatch) => {
  const updated = (await axios.put(`/api/cart/${id}`, { quantity })).data;
  dispatch({ type: UPDATE_LINEITEM, updated });
};

const addLineItem = (id, quantity) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const created = (await axios.post(
    '/api/cart/',
    { id, quantity },
    { headers: { token } },
  )).data;
  dispatch({ type: ADD_LINEITEM, created });
};

const deleteLineItem = (id) => async (dispatch) => {
  await axios.delete(`/api/cart/${id}`);
  dispatch({ type: DELETE_LINEITEM, id });
};

export {
  fetchBrands,
  fetchCategories,
  fetchProducts,
  fetchOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  fetchCart,
  addLineItem,
  updateLineItem,
  deleteLineItem,
  attemptLogin,
  attemptSessionLogin,
  logout,
  register,
};
