import { shallow } from 'enzyme';
import NewProducts, { addProduct } from './NewProducts';
import { actionTypes } from '../../store';

describe('NewProducts', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NewProducts />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call ADD_PRODUCT action passing the new product object and redirect to products', () => {
    const props = { dispatch: jest.fn() };
    const newProduct = {
      name: 'new product',
      description: 'desc',
      price: '12.20',
      stock: '123',
      photos: ['image1.png']
    };
    const expectedAction = {
      type: actionTypes.ADD_PRODUCT,
      newProduct
    };

    const Router = {
      push: jest.fn()
    };

    addProduct(Router)(props)(newProduct);
    expect(props.dispatch).toHaveBeenCalledWith(expectedAction);
    expect(Router.push).toHaveBeenCalledWith('/products');
  });
});
