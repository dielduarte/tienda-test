import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import DefaultLayout from '../layouts/default';
import PhotoUpload from '../../components/PhotoUpload';
import Card from '../../components/Card';
import { Input, Editor } from '../../components/Forms';
import { Row, ResponsiveRow } from '../../components/Flex';
import Button from '../../components/Button';

const FixedContainer = styled.div`
  width: 300px;
  margin-right: 20px;
`;

function Ui({ initialValues, validationSchema, addProduct }) {
  return (
    <DefaultLayout>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={values => addProduct(values)}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
          values,
          errors
        }) => (
          <Fragment>
            <PhotoUpload
              label="Fotos do seu produto"
              onUploadSuccess={photos => setFieldValue('photos', photos)}
            />
            <Card bordered>
              <Input
                label="Nome"
                onChange={handleChange}
                name="name"
                value={values.name}
                errors={errors.name}
              />
              <Editor
                label="Descrição"
                onChange={state => setFieldValue('description', state)}
              />
            </Card>

            <Card bordered>
              <ResponsiveRow>
                <FixedContainer>
                  <Input
                    label="Preço"
                    prefix="R$"
                    onChange={handleChange}
                    name="price"
                    value={values.price}
                    type="number"
                    errors={errors.price}
                    min="0"
                  />
                </FixedContainer>
                <FixedContainer>
                  <Input
                    label="Estoque"
                    onChange={handleChange}
                    name="stock"
                    type="number"
                    value={values.stock}
                    min="0"
                  />
                </FixedContainer>
              </ResponsiveRow>
            </Card>

            <Row>
              <Button title="Publicar produto" onClick={handleSubmit} />
              <Button
                title="Cancelar"
                bordered
                type="secondary"
                onClick={() => resetForm()}
              />
            </Row>
          </Fragment>
        )}
      </Formik>
    </DefaultLayout>
  );
}

export default Ui;
