import { compose, withReducer } from 'recompose';

import { StoreContext, reducer, initialValue } from '../store';

const WithStore = props => {
  return (
    <StoreContext.Provider value={props}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default compose(withReducer('store', 'dispatch', reducer, initialValue))(
  WithStore
);
