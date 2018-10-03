import { shallow } from 'enzyme';
import 'jest-styled-components';

import Content, { ContentSpace } from './Content';

describe('Content', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly isOpen', () => {
    const wrapper = shallow(<Content isOpen={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('ContentSpace', () => {
    const wrapper = shallow(<ContentSpace />);
    expect(wrapper).toMatchSnapshot();
  });
});
