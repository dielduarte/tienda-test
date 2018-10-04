import createActionTypes from 'redux-actiontypes-namespace';

const actions = [
  {
    nameSpace: 'global',
    types: ['RESET', 'PERSIST']
  },
  {
    nameSpace: 'products',
    types: ['ADD_PRODUCT']
  },
  {
    nameSpace: 'UI',
    types: ['TOGGLE_SIDEBAR']
  }
];

export default createActionTypes(actions);
