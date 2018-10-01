import styled from 'styled-components';
import { Small } from '../Text';

export const SidebarContainer = styled.aside`
  width: 340px;
  height: 100vh;
  overflow: scroll;
  background-color: ${props => props.theme.darkGray};
  border-right: 2px solid ${props => props.theme.gray};
`;

export const SidebarHeader = styled.div`
  background-color: ${props => props.theme.white};
  padding: 15px;
`;

export const Owner = styled(Small)`
  color: ${props => props.theme.gray};
`;
