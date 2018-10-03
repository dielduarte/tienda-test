import { mount } from 'enzyme';
import 'jest-styled-components';

import Editor, { onEditorStateUpdate } from './Editor';

describe('Editor', () => {
  // it('should render correctly', () => {
  //   const wrapper = mount(<Editor label="Description" />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('should call setEditorState prop passing the new state', () => {
    const props = { setEditorState: jest.fn(), onChange: jest.fn() };
    const editorState = { newData: '<p>Hey</p>' };
    onEditorStateUpdate(props)(editorState);

    expect(props.setEditorState).toHaveBeenCalledWith(editorState);
    expect(props.onChange).toHaveBeenCalledWith(editorState);
  });
});
