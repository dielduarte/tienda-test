import { shallow, mount } from 'enzyme';
import Button from './Button';
import '../../config/fontAwesome';

let onClick;

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    onClick = jest.fn();
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Button title="ir para minha loja" onClick={onClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly default bordered', () => {
    const wrapper = mount(
      <Button title="ir para minha loja" bordered onClick={onClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly type secondary', () => {
    const wrapper = shallow(
      <Button title="ir para minha loja" type="secondary" onClick={onClick} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly secondary bordered', () => {
    const wrapper = mount(
      <Button
        title="ir para minha loja"
        type="secondary"
        bordered
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with icon', () => {
    const wrapper = mount(
      <Button
        title="ir para minha loja"
        iconName="external-link-alt"
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly secondary with icon ', () => {
    const wrapper = mount(
      <Button
        title="ir para minha loja"
        iconName="external-link-alt"
        type="secondary"
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly uppercase false', () => {
    const wrapper = mount(
      <Button
        title="ir para minha loja"
        iconName="external-link-alt"
        uppercase={false}
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly full ', () => {
    const wrapper = mount(
      <Button
        title="ir para minha loja"
        iconName="external-link-alt"
        type="secondary"
        full
        onClick={onClick}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Button title="ir para minha loja" onClick={onClick} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.props().onClick();
    expect(onClick).toHaveBeenCalled();
  });
});
