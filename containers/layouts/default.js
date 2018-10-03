import React from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { compose, lifecycle, withState, withHandlers } from 'recompose';

import Sidebar from '../../components/Sidebar';
import MenuList from '../../components/MenuList';
import { Row } from '../../components/Flex';
import Content, { ContentSpace } from '../../components/Content';
import Card from '../../components/Card';
import { Regular } from '../../components/Text';
import WithConsumer from '../../utils/WithConsumer';
import actionTypes from '../../store/actionTypes';

const toggleSidebar = props => () => {
  props.dispatch({ type: actionTypes.TOGGLE_SIDEBAR });
};

function layoutDefaut({ children, isProductRouter, store, toggleSidebar }) {
  return (
    <Row>
      <Sidebar
        storeName="Minha loja"
        owner="Martín Palombo"
        shopLink="teste-brasil.lojavirtualnuvem.com"
        open={store.ui.showSidebar}
      >
        <MenuList
          items={[
            { title: 'Produtos', href: '/products' },
            { title: 'Adicionar um novo produto', href: '/products/new' }
          ]}
        />
      </Sidebar>
      <Content isOpen={store.ui.showSidebar}>
        <Card>
          <Row>
            <FontAwesomeIcon
              icon="bars"
              style={{ marginRight: '10px' }}
              onClick={toggleSidebar}
            />
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
      const isProductRouter =
        Router.route === '/products' || Router.route === '/';
      this.props.setIsProductRouter(isProductRouter);
    }
  }),
  withHandlers({ toggleSidebar })
)(layoutDefaut);
