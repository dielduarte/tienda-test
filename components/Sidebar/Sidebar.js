import React from 'react';

import { Regular } from '../Text';
import { Row, Column } from '../Flex';
import Button from '../Button';
import { SidebarContainer, SidebarHeader, Owner, SidebarIcon } from './Ui';

function Sidebar({ storeName, owner, shopLink, children }) {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Row>
          <SidebarIcon src="http://localhost:3000/static/logo.svg" />
          <Column>
            <Regular>{storeName}</Regular>
            <Owner>{owner}</Owner>
          </Column>
        </Row>
        <Row>
          <Button
            title={shopLink}
            full
            iconName="external-link-alt"
            bordered
            uppercase={false}
            onClick={() => {}}
          />
        </Row>
      </SidebarHeader>
      {children}
    </SidebarContainer>
  );
}

export default Sidebar;
