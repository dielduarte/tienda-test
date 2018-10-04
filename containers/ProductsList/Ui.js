import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from 'react-loaders';

import DefaultLayout from '../layouts/default';
import Card from '../../components/Card';
import Table, {
  TableGroup,
  BodyColumn,
  TableContent,
  TableImg
} from '../../components/Table';
import Link from '../../components/Link';
import { Regular } from '../../components/Text';
import PaginateItem from '../../components/PaginateItem';

const ProductName = styled(Link)`
  margin-left: 10px;
`;

const Loading = styled(Loader)`
  transform: translateX(50%);
  margin-top: 100px;
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

function Ui({ products, page, setPage, fetchingProdutcs }) {
  if (fetchingProdutcs) {
    return (
      <DefaultLayout>
        <Loading type="cube-transition" color={'#000'} />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Card>
        {!products.length ? (
          <Regular>Você ainda não cadastrou nenhum produto :(</Regular>
        ) : (
          <Table
            headers={[
              'Produto',
              'Estoque',
              'Preço original',
              'Preço promocional',
              'variações',
              'Ações'
            ]}
          >
            {products[page].map((product, key) => renderRow(product, key))}
          </Table>
        )}
      </Card>
      {products.map((p, key) => (
        <PaginateItem key={key} onClick={() => setPage(key)}>
          {key + 1}
        </PaginateItem>
      ))}
    </DefaultLayout>
  );
}

export default Ui;
