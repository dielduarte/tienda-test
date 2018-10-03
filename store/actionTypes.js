import createActionTypes from 'redux-actiontypes-namespace';

const actions = [
  {
    nameSpace: 'global',
    types: ['RESET']
  },
  {
    nameSpace: 'products',
    types: ['ADD_PRODUCT']
  }
];

export default createActionTypes(actions);
