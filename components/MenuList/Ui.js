import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Small } from '../Text';

export const Menu = styled.nav`
  list-style-type: none;
`;

export const MenuItemText = styled(Small)`
  margin-left: 10px;
  flex: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 1px;
`;

export const MenuItem = styled.div`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.lightBlue};
  }
`;
