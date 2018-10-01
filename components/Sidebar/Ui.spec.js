import { shallow } from 'enzyme';
import 'jest-styled-components';

import { SidebarContainer, SidebarHeader, Owner } from './Ui';

describe('Sidebar => Ui', () => {
  it('SidebarContainer', () => {
    const wrapper = shallow(<SidebarContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('SidebarHeader', () => {
    const wrapper = shallow(<SidebarHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Owner', () => {
    const wrapper = shallow(<Owner />);
    expect(wrapper).toMatchSnapshot();
  });
});
