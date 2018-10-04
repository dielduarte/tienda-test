import actionTypes from './actionTypes';
import { set } from './persist';

export const initialValue = {
  products: [],
  fetchingProdutcs: true,
  ui: {
    showSidebar: true
  }
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return initialValue;
    case actionTypes.ADD_PRODUCT:
      const products = [...state.products, action.newProduct];
      set('products', JSON.stringify(products));
      return { ...state, products };
    case actionTypes.TOGGLE_SIDEBAR:
      return { ...state, ui: { showSidebar: !state.ui.showSidebar } };
    case actionTypes.PERSIST:
      return { ...state, products: action.products, fetchingProdutcs: false };

    default:
      return state;
  }
};
