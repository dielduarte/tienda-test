import styled from 'styled-components';

import { Row, Column } from '../Flex';

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  border: 2px solid
    ${props => (props.withError ? props.theme.red : props.theme.gray)};
  border-radius: ${props => (props.withPrefix ? '0 5px 5px 0;' : '5px')};
  padding: 10px;
  height: 40px;
  flex: 2;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const FormRow = styled(Row)`
  flex: 1;
`;

export const FormColumn = styled(Column)`
  flex: 1;
`;

export const InputPrefix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.gray};
  color: ${props => props.theme.white};
  min-width: 40px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  margin-bottom: 20px;
`;

export const DraftContainer = styled(FormRow)`
  div[class^='RichTextEditor__root'],
  div[class^='RichTextEditor__editor'] {
    width: 100%;
  }

  div[class^='RichTextEditor__editor'] {
    height: 300px;
  }
`;
