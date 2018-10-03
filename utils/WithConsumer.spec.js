import React from 'react';
import WithConsumer from './WithConsumer';
import { shallow } from 'enzyme';

function FakeComponent() {
  return <h1>Text</h1>;
}

describe('WithConsumer', () => {
  it('sould return the wrappedComponent with access to store object and dispatch method', () => {
    const Component = WithConsumer(FakeComponent);
    const wrapper = shallow(<Component />);

    expect(wrapper).toMatchSnapshot();
  });
});
