import styled from 'styled-components';
import { Small } from '../Text';

export const SidebarContainer = styled.aside`
  width: 320px;
  height: 100vh;
  overflow: scroll;
  background-color: ${props => props.theme.darkGray};
  border-right: 2px solid ${props => props.theme.gray};
  transition: all 0.3s linear;
  position: absolute;
  left: ${props => (props.isOpen ? '0' : '-320px')};
`;

export const SidebarHeader = styled.div`
  background-color: ${props => props.theme.white};
  padding: 15px;
`;

export const SidebarIcon = styled.img`
  margin-right: 10px;
`;

export const Owner = styled(Small)`
  color: ${props => props.theme.gray};
`;
