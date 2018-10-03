import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  padding: 30px 20px 10px 20px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const DashedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 2px ${props => props.theme.gray};
  width: calc(25% - 20px);
  height: 150px;
  margin: 20px 20px 0 0;

  input {
    visibility: hidden;
    width: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    cursor: ${props => (props.withHover ? 'pointer' : 'default')};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${props => props.theme.gray};
`;
