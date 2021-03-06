import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Row, Column, ResponsiveRow } from './Flex';

describe('Flex', () => {
  it('Row', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Row with wrap', () => {
    const wrapper = shallow(<Row wrap="true" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Column', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).toMatchSnapshot();
  });

  it('ResponsiveRow', () => {
    const wrapper = shallow(<ResponsiveRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
