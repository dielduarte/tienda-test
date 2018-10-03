import { shallow } from 'enzyme';
import 'jest-styled-components';

import {
  Label,
  Input,
  FormRow,
  FormColumn,
  InputPrefix,
  DraftContainer
} from './Ui';

describe('Forms => Ui', () => {
  it('Label', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Input', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Input withError', () => {
    const wrapper = shallow(<Input withError />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Input with prefix', () => {
    const wrapper = shallow(<Input withPrefix />);
    expect(wrapper).toMatchSnapshot();
  });

  it('FormRow', () => {
    const wrapper = shallow(<FormRow />);
    expect(wrapper).toMatchSnapshot();
  });

  it('FormColumn', () => {
    const wrapper = shallow(<FormColumn />);
    expect(wrapper).toMatchSnapshot();
  });

  it('InputPrefix', () => {
    const wrapper = shallow(<InputPrefix>R$</InputPrefix>);
    expect(wrapper).toMatchSnapshot();
  });

  it('DraftContainer', () => {
    const wrapper = shallow(<DraftContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
