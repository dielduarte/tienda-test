import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Menu, MenuItem, MenuItemText, MenuIcon } from './Ui';

describe('MenuList => Ui', () => {
  it('Menu', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });

  it('MenuItem', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('MenuItemText', () => {
    const wrapper = shallow(<MenuItemText />);
    expect(wrapper).toMatchSnapshot();
  });

  it('MenuIcon', () => {
    const wrapper = shallow(<MenuIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
