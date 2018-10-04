import { compose, mapProps, withState } from 'recompose';
import chunk from 'lodash/chunk';

import WithConsumer from '../../utils/WithConsumer';

import Ui from './Ui';

export const getPaginatedData = (props, totalPerPage) => {
  return chunk(props.store.products, totalPerPage);
};

export default compose(
  WithConsumer,
  withState('page', 'setPage', 0),
  mapProps(props => ({
    products: getPaginatedData(props, 20),
    page: props.page,
    setPage: props.setPage,
    fetchingProdutcs: props.store.fetchingProdutcs
  }))
)(Ui);
