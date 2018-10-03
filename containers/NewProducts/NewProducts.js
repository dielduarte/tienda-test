import { compose, withState, withHandlers } from 'recompose';
const Yup = require('yup');

import WithConsumer from '../../utils/WithConsumer';
import { actionTypes } from '../../store';

import Ui from './Ui';

const formValues = {
  name: '',
  description: '',
  price: '',
  stock: '',
  photos: []
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  price: Yup.number().required('Preço é obrigatorio')
});

export const addProduct = props => newProduct => {
  const { dispatch } = props;

  dispatch({ type: actionTypes.ADD_PRODUCT, newProduct });
};

export default compose(
  withState('initialValues', 'setInitialValues', formValues),
  withState('validationSchema', 'setValidationSchema', validationSchema),
  WithConsumer,
  withHandlers({ addProduct })
)(Ui);
