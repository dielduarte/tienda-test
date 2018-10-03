import React from 'react';
import { string, func } from 'prop-types';

import {
  Label,
  Input as StyledInput,
  FormRow,
  FormColumn,
  InputPrefix
} from './Ui';

function Input({ label, placeholder, prefix, onChange, errors, ...allProps }) {
  const withPrefix = prefix !== '';
  const withError = errors !== '';

  return (
    <FormRow>
      <FormColumn>
        <Label>{label}</Label>
        <FormRow>
          {withPrefix && <InputPrefix>{prefix}</InputPrefix>}
          <StyledInput
            placeholder={errors || placeholder}
            withPrefix={withPrefix}
            onChange={onChange}
            withError={withError}
            {...allProps}
          />
        </FormRow>
      </FormColumn>
    </FormRow>
  );
}

Input.propsType = {
  label: string.isRequired,
  placeholder: string,
  prefix: string,
  onChange: func,
  errors: string
};

Input.defaultProps = {
  placeholder: '',
  prefix: '',
  errors: '',
  onChange: () => {}
};

export default Input;
