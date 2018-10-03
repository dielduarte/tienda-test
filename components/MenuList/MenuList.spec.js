import { shallow } from 'enzyme';
import 'jest-styled-components';

import MenuList from './MenuList';

describe('MenuList', () => {
  it('should render correcly', () => {
    const wrapper = shallow(
      <MenuList
        items={[
          { title: 'Produtos', href: '/products' },
          { title: 'Adicionar um novo produto', href: '/products/new' }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
