import React from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { compose, lifecycle, withState } from 'recompose';

import Sidebar from '../../components/Sidebar';
import MenuList from '../../components/MenuList';
import { Row } from '../../components/Flex';
import Content, { ContentSpace } from '../../components/Content';
import Card from '../../components/Card';
import { Regular } from '../../components/Text';
import WithConsumer from '../../utils/WithConsumer';

function layoutDefaut({ children, isProductRouter }) {
  return (
    <Row>
      <Sidebar
        storeName="Minha loja"
        owner="Martín Palombo"
        shopLink="teste-brasil.lojavirtualnuvem.com"
      >
        <MenuList
          items={[
            { title: 'Produtos', href: '/products' },
            { title: 'Adicionar um novo produto', href: '/products/new' }
          ]}
        />
      </Sidebar>
      <Content>
        <Card>
          <Row>
            <FontAwesomeIcon icon="bars" style={{ marginRight: '10px' }} />
            <Regular>
              Meus produtos {!isProductRouter && '/ Adicionar um produto'}
            </Regular>
          </Row>
        </Card>
        <ContentSpace>{children}</ContentSpace>
      </Content>
    </Row>
  );
}

export default compose(
  withState('isProductRouter', 'setIsProductRouter', true),
  WithConsumer,
  lifecycle({
    componentDidMount() {
      const isProductRouter = Router.route === '/products';
      this.props.setIsProductRouter(isProductRouter);
    }
  })
)(layoutDefaut);
