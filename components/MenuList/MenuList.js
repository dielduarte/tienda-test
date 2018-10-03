import React from 'react';
import Link from 'next/link';
import { arrayOf, objectOf, string } from 'prop-types';

import { Row } from '../Flex';
import { Menu, MenuItem, MenuItemText, MenuIcon } from './Ui';

function renderItem(item, key) {
  return (
    <Link href={item.href} key={key}>
      <MenuItem>
        <Row>
          <MenuIcon icon="ellipsis-v" />
          <MenuIcon icon="bars" />
        </Row>
        <MenuItemText>{item.title}</MenuItemText>
        <MenuIcon icon="angle-right" size="lg" />
      </MenuItem>
    </Link>
  );
}

function MenuList({ items }) {
  return <Menu>{items.map((item, key) => renderItem(item, key))}</Menu>;
}

MenuList.propsType = {
  items: arrayOf(objectOf({ title: string, href: string }))
};

export default MenuList;
