import { shallow } from 'enzyme';
import 'jest-styled-components';

import Ui from './Ui';

describe('ProductsList => Ui', () => {
  it('should render correctly', () => {
    const props = {
      store: {
        products: [
          {
            description: '',
            name: 'Product with image',
            photos: [
              'data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQg…1Bby2tykilgAeSK6aHU3aDYxJpos1c9KsCwVUzTVQXKf/2Q=='
            ],
            price: 123,
            stock: ''
          },
          { description: '', name: 'Product', photos: [], price: 123, stock: 1 }
        ]
      },
      products: [
        [
          {
            description: '',
            name: 'Product with image',
            photos: [
              'data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQg…1Bby2tykilgAeSK6aHU3aDYxJpos1c9KsCwVUzTVQXKf/2Q=='
            ],
            price: 123,
            stock: ''
          },
          { description: '', name: 'Product', photos: [], price: 123, stock: 1 }
        ]
      ],
      page: 0,
      setPage: jest.fn()
    };

    const wrapper = shallow(<Ui {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly the empty message', () => {
    const props = {
      store: {
        products: []
      },
      products: [],
      page: 0,
      setPage: jest.fn()
    };

    const wrapper = shallow(<Ui {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
