import actionTypes from './actionTypes';

export const initialValue = {
  products: [],
  ui: {
    showSidebar: true
  }
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return initialValue;
    case actionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.newProduct] };
    case actionTypes.TOGGLE_SIDEBAR:
      return { ...state, ui: { showSidebar: !state.ui.showSidebar } };

    default:
      return state;
  }
};
