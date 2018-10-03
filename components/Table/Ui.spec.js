import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Table, TableGroup, HeaderColumn, BodyColumn } from './Ui';

describe('Table => Ui', () => {
  it('Table', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  it('TableGroup', () => {
    const wrapper = shallow(<TableGroup />);
    expect(wrapper).toMatchSnapshot();
  });

  it('HeaderColumn', () => {
    const wrapper = shallow(<HeaderColumn />);
    expect(wrapper).toMatchSnapshot();
  });

  it('BodyColumn', () => {
    const wrapper = shallow(<BodyColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
