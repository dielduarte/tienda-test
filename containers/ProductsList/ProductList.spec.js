import { shallow } from 'enzyme';
import 'jest-styled-components';

import ProductsList, { getPaginatedData } from './ProductsList';

describe('ProductsList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return array chunks with length equal length passed', () => {
    const props = {
      store: {
        products: ['item 1', 'item 2', 'item 3', 'item 4']
      }
    };

    const chunksExpected = [['item 1', 'item 2'], ['item 3', 'item 4']];

    expect(getPaginatedData(props, 2)).toEqual(chunksExpected);
  });
});
