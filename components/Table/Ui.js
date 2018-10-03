import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr:nth-child(odd) {
    background: ${props => props.theme.white};
  }

  tr:nth-child(even) {
    background: ${props => props.theme.lightGray};
  }
`;

export const TableGroup = styled.tr`
  height: 60px;
  border-bottom: 2px solid ${props => props.theme.gray};
  padding: 0 10px;
`;

export const HeaderColumn = styled.th`
  font-size: 12px;
  text-align: left;
`;

export const BodyColumn = styled.td`
  font-size: 14px;
`;

export const TableContent = styled.div`
  background: ${props => props.theme.gray};
  padding: 10px;
  display: inline-block;
`;

export const TableImg = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
`;
