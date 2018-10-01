import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Regular, Small } from './Text';

describe('Text', () => {
  it('Regular', () => {
    const wrapper = shallow(<Regular />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Small', () => {
    const wrapper = shallow(<Small />);
    expect(wrapper).toMatchSnapshot();
  });
});
