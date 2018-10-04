import styled from 'styled-components';

const PaginateItem = styled.span`
  display: inline-block;
  text-align: center;
  margin-right: 2px;
  padding-top: 2px;
  color: ${props => props.theme.white};
  font-size: 14px;
  background: ${props => props.theme.gray};
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default PaginateItem;
