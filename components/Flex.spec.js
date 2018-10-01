import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Row, Column } from './Flex';

describe('Flex', () => {
  it('Row', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Column', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).toMatchSnapshot();
  });
});
