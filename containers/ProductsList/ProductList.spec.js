import { shallow } from 'enzyme';
import 'jest-styled-components';

import ProductsList from './ProductsList';

describe('ProductsList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ProductsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
