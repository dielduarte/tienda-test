import { shallow } from 'enzyme';
import 'jest-styled-components';

import Link from './Link';

describe('Link', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Link>meu produto</Link>);
    expect(wrapper).toMatchSnapshot();
  });
});
