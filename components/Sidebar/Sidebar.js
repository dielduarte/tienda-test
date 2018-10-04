import React from 'react';

import { Regular } from '../Text';
import { Row, Column } from '../Flex';
import Button from '../Button';
import { SidebarContainer, SidebarHeader, Owner, SidebarIcon } from './Ui';

function Sidebar({ storeName, owner, shopLink, children, open, iconLink }) {
  return (
    <SidebarContainer isOpen={open}>
      <SidebarHeader>
        <Row>
          <SidebarIcon src={iconLink} />
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
