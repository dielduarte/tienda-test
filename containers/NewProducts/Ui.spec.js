import { shallow } from 'enzyme';
import 'jest-styled-components';

import Ui from './Ui';

describe('NewProducts => Ui', () => {
  it('should render correctly', () => {
    const props = {
      initialValues: {},
      validationSchema: {},
      addProduct: jest.fn()
    };

    const wrapper = shallow(<Ui {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
