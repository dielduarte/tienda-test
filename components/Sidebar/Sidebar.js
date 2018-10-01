import React from 'react';
import { SidebarContainer, SidebarHeader, Owner } from './Ui';
import { Regular } from '../Text';
import { Row, Column } from '../Flex';

function Sidebar({ storeName, owner }) {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Row>
          <img src="http://localhost:3000/static/logo.svg" />
          <Column>
            <Regular>{storeName}</Regular>
            <Owner>{owner}</Owner>
          </Column>
        </Row>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;
