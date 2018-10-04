import { compose, withReducer, lifecycle } from 'recompose';

import { StoreContext, reducer, initialValue } from '../store';
import actionTypes from '../store/actionTypes';
import { get } from '../store/persist';

const WithStore = props => {
  return (
    <StoreContext.Provider value={props}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default compose(
  withReducer('store', 'dispatch', reducer, initialValue),
  lifecycle({
    componentDidMount() {
      const products = JSON.parse(get('products')) || [];
      this.props.dispatch({
        type: actionTypes.PERSIST,
        products
      });
    }
  })
)(WithStore);
