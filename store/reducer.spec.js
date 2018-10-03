import reducer, { initialValue } from './reducer';
import actionTypes from './actionTypes';

describe('Reducers', () => {
  it('should reset state to equal initialValue when RESET is called', () => {
    const state = reducer(
      { ...initialValue, anyValue: 'anyValue' },
      { type: actionTypes.RESET }
    );
    expect(state).toEqual(initialValue);
  });

  it(`should return the state if action wasn't mapped`, () => {
    const state = reducer({ ...initialValue }, { type: 'any type' });
    expect(state).toEqual(initialValue);
  });

  it('should return add new product to state', () => {
    const newProduct = {
      name: 'Name of the product',
      description: 'lorem ipsum dolor',
      price: 12.2,
      stock: 100,
      pictures: ['Image1.png', 'Image2.png']
    };

    const state = reducer(
      { ...initialValue },
      { type: actionTypes.ADD_PRODUCT, newProduct }
    );
    expect(state.products.length).toEqual(1);
    expect(state.products[0]).toEqual(newProduct);
  });

  it('should toggle value of showSidebar', () => {
    const state = reducer(
      { ...initialValue, ui: { showSidebar: true } },
      { type: actionTypes.TOGGLE_SIDEBAR }
    );
    expect(state.ui.showSidebar).toBeFalsy();
  });
});
