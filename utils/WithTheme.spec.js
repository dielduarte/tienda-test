import { shallow } from 'enzyme';
import 'jest-styled-components';

import WithTheme from './WithTheme';

describe('WithTheme', () => {
  it('Regular', () => {
    const wrapper = shallow(<WithTheme />);
    expect(wrapper).toMatchSnapshot();
  });
});
