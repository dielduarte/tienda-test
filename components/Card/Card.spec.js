import { shallow } from 'enzyme';
import 'jest-styled-components';

import Card from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Card>
        <h1>title</h1>
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly bordered', () => {
    const wrapper = shallow(
      <Card bordered>
        <h1>title</h1>
      </Card>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
