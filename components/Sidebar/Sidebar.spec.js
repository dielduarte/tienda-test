import { shallow } from 'enzyme';
import 'jest-styled-components';

import Sidebar from './Sidebar';
import MenuList from '../MenuList';

describe('Sidebar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Sidebar
        storeName="Minha loja"
        owner="Martín Palombo"
        shopLink="link.paraloja.com"
      >
        <MenuList
          items={[
            { title: 'Produtos', href: '/products' },
            { title: 'Adicionar um novo produto', href: '/products/new' }
          ]}
        />
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
