import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('should render correcly', () => {
    const wrapper = shallow(
      <Input label="name" name="name" placeholder="your name here" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with prefix', () => {
    const wrapper = shallow(
      <Input label="name" placeholder="your name here" prefix="R$" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with error', () => {
    const wrapper = shallow(
      <Input label="name" prefix="R$" errors="name is required" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange prop when onChange event happen', () => {
    const onChange = jest.fn();

    const wrapper = mount(
      <Input
        label="name"
        placeholder="your name here"
        prefix="R$"
        onChange={onChange}
      />
    );

    wrapper
      .find('input')
      .props()
      .onChange();

    expect(onChange).toHaveBeenCalled();
  });
});
