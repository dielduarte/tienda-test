import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Container, Label, DashedContainer, Icon } from './Ui';

describe('PhotoUpload => Ui', () => {
  it('Container', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Label', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper).toMatchSnapshot();
  });

  it('DashedContainer', () => {
    const wrapper = shallow(<DashedContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('DashedContainer withHover', () => {
    const wrapper = shallow(<DashedContainer withHover />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Icon', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper).toMatchSnapshot();
  });
});
