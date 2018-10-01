import { shallow } from 'enzyme';
import 'jest-styled-components';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Sidebar storeName="Minha loja" owner="Martín Palombo" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
