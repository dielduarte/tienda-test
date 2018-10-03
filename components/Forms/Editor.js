import React from 'react';
import { string, func } from 'prop-types';
import { withState, withHandlers, compose, lifecycle } from 'recompose';

import { Label, FormRow, FormColumn, DraftContainer } from './Ui';

export const onEditorStateUpdate = props => editorState => {
  props.setEditorState(editorState);
  props.onChange(editorState);
};

function Editor({ label, editorState, onEditorStateUpdate, isMounted }) {
  let Draft;

  if (isMounted) {
    Draft = require('react-rte').default;
  }

  return (
    <FormRow>
      <FormColumn>
        <Label>{label}</Label>
        <DraftContainer>
          {isMounted && (
            <Draft
              value={editorState || Draft.createEmptyValue()}
              onChange={onEditorStateUpdate}
            />
          )}
        </DraftContainer>
      </FormColumn>
    </FormRow>
  );
}

Editor.propsType = {
  label: string.isRequired,
  onChange: func,
  onEditorStateUpdate: func
};

export default compose(
  withState('editorState', 'setEditorState', ''),
  withState('isMounted', 'setMounted', false),
  withHandlers({ onEditorStateUpdate }),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true);
    }
  })
)(Editor);
