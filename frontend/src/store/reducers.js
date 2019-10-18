import { combineReducers } from 'redux';
import {
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
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

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
});
