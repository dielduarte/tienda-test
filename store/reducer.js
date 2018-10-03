import actionTypes from './actionTypes';

export const initialValue = {
  products: []
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return initialValue;
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.newProduct]
      };

    default:
      return state;
  }
};
