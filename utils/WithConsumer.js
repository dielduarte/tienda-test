import React, { createFactory, Component } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';
import { StoreContext } from '../store';

const WithConsumer = BaseComponent => {
  const factory = createFactory(BaseComponent);

  class WithConsumer extends Component {
    render() {
      return (
        <StoreContext.Consumer>
          {({ store, dispatch }) =>
            factory({
              ...{ ...this.props, store, dispatch },
              ...this.state
            })
          }
        </StoreContext.Consumer>
      );
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'WithConsumer'))(
      WithConsumer
    );
  }
  return WithConsumer;
};

export default WithConsumer;
