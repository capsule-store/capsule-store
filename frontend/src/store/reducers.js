import { combineReducers } from 'redux';
import {
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
  SET_AUTH,
  DELETE_AUTH,
  CREATE_USER,
} from './constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    case CREATE_ORDER:
      return [...state, action.order];
    case UPDATE_ORDER:
      return state.map((order) => {
        if (order.id === action.order.id) {
          return action.order;
        }
        return order;
      });
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.order.id);
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_LINEITEM:
      const found = state.find((item) => item.id === action.created.id);

      if (found) {
        return state.map((item) => {
          if (item.id === action.created.id) {
            item.quantity += action.created.quantity;
          }
          return item;
        });
      }
      return [...state, action.created];

    case UPDATE_LINEITEM:
      return state.map((item) => (item.id === action.updated.id ? action.updated : item));
    case DELETE_LINEITEM:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.auth };
    case DELETE_AUTH:
      return { ...action.auth };
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      // registered user will be added
      return action.user;
    default:
      return state;
  }
};

const brandReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BRANDS:
      return action.brands;
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
  brands: brandReducer,
});
