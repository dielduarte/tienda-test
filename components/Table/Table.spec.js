import { shallow } from 'enzyme';
import 'jest-styled-components';

import Table, { TableGroup, BodyColumn } from './Table';

describe('Table', () => {
  it('shoud render correctly', () => {
    const wrapper = shallow(
      <Table
        headers={[
          'Produto',
          'Estoque',
          'Preço original',
          'Preço promocional variações',
          'Ações'
        ]}
      >
        <TableGroup>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
        </TableGroup>
        <TableGroup>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
          <BodyColumn>content</BodyColumn>
        </TableGroup>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
