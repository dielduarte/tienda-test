import { shallow } from 'enzyme';
import 'jest-styled-components';

import PaginateItem from './PaginateItem';

describe('PaginateItem', () => {
  it('PaginateItem', () => {
    const wrapper = shallow(<PaginateItem>1</PaginateItem>);
    expect(wrapper).toMatchSnapshot();
  });
});
