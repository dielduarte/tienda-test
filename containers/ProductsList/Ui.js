import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DefaultLayout from '../layouts/default';
import Card from '../../components/Card';
import Table, {
  TableGroup,
  BodyColumn,
  TableContent,
  TableImg
} from '../../components/Table';
import Link from '../../components/Link';

const ProductName = styled(Link)`
  margin-left: 10px;
`;

function renderRow(item, key) {
  const hasPhotos = item.photos.length;

  return (
    <TableGroup key={key}>
      <BodyColumn>
        <TableContent>
          {hasPhotos ? (
            <TableImg src={item.photos[0]} />
          ) : (
            <FontAwesomeIcon icon="camera" />
          )}
        </TableContent>
        <ProductName>{item.name}</ProductName>
      </BodyColumn>
      <BodyColumn>
        <TableContent>{item.stock ? item.stock : '∞'}</TableContent>
      </BodyColumn>
      <BodyColumn>
        <TableContent>R$ {item.price}</TableContent>
      </BodyColumn>
      <BodyColumn>
        <TableContent>+</TableContent>
      </BodyColumn>
      <BodyColumn />
      <BodyColumn>content</BodyColumn>
    </TableGroup>
  );
}

function Ui({ store }) {
  const { products } = store;

  return (
    <DefaultLayout>
      <Card>
        <Table
          headers={[
            'Produto',
            'Estoque',
            'Preço original',
            'Preço promocional',
            'variaçoões',
            'Ações'
          ]}
        >
          {products.map((product, key) => renderRow(product, key))}
        </Table>
      </Card>
    </DefaultLayout>
  );
}

export default Ui;
