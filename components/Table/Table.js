import React from 'react';
import {
  Table as StyledTable,
  TableGroup,
  HeaderColumn,
  BodyColumn,
  TableContent,
  TableImg
} from './Ui';

function renderHeader(header, key) {
  return <HeaderColumn key={key}>{header}</HeaderColumn>;
}

function Table({ headers, children }) {
  return (
    <StyledTable>
      <thead>
        <TableGroup>
          {headers.map((header, key) => renderHeader(header, key))}
        </TableGroup>
      </thead>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}

export { TableGroup, BodyColumn, TableContent, TableImg };
export default Table;
