import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { OutlineTextField, OutlineSelect } from 'Components/Fields';
import Button from 'Components/Buttons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  fullWidth: {
    width: '100%'
  }
});

const initialState = {
  title: '',
  distance: '',
  type: 'international',
  price: ''
};

const typesDelivery = [
  { value: 'international', name: 'Международная' },
  { value: 'internal', name: 'Внутренняя' }
];

const OrderForm = props => {
  const classes = useStyles();
  const formValues = props.editableOrder || initialState;

  const calculatePrice = (distance, type) => {
    const typeDelivery = type === 'internal' ? 3 : 5;
    const price = distance * typeDelivery;
    return price;
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formValues}
      onSubmit={(values, { setSubmitting }) => {
        if (!values.id) {
          props.addOrder({ ...values, id: Math.random() });
        } else {
          props.updateOrder(values);
        }
        props.closeModal();
        setSubmitting(false);
      }}
      render={({ values, handleSubmit, setFieldValue }) => {
        const price = () => calculatePrice(values.distance, values.type);

        return (
          <Form className={classes.container} onSubmit={handleSubmit}>
            <OutlineTextField required label="Название" name="title" fullWidth />
            <OutlineTextField required label="Расстояние" name="distance" fullWidth />
            <OutlineSelect
              label="Тип доставки"
              selectItems={typesDelivery}
              name="type"
              value={formValues.type}
              className={classes.fullWidth}
            />
            <Typography variant="h6">Стоимость доставки: {price()} Руб</Typography>
            <Box className={classes.fullWidth}>
              <Button type="submit" onClick={() => setFieldValue('price', price())}>
                Сохранить
              </Button>
            </Box>
          </Form>
        );
      }}
    />
  );
};

export default OrderForm;
