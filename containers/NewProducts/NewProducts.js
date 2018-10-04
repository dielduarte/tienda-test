import { compose, withState, withHandlers } from 'recompose';
const Yup = require('yup');
import Router from 'next/router';

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
  price: Yup.number()
    .min(0, 'Preço mínimo deve ser zero')
    .required('Preço é obrigatorio')
});

export const addProduct = Router => props => newProduct => {
  const { dispatch } = props;

  dispatch({ type: actionTypes.ADD_PRODUCT, newProduct });
  Router.push('/products');
};

export default compose(
  withState('initialValues', 'setInitialValues', formValues),
  withState('validationSchema', 'setValidationSchema', validationSchema),
  WithConsumer,
  withHandlers({ addProduct: addProduct(Router) })
)(Ui);
