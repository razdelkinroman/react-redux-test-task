import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { OutlineTextField, OutlineSelect } from 'Components/Fields';
import { PrimaryButton, PrimaryIconButton } from 'Components/Buttons';
import YandexMap from 'Components/YandexMap';

import { initialState, typesDelivery, EXPRESS_TARIFF, STANDART_TARIFF } from './const';
import { styles } from './styles';

const OrderForm = props => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [openMap, setOpenMap] = useState(false);
  const formValues = props.editableOrder || initialState;

  const calculatePrice = (distance, type) => {
    const typeDelivery = type === 'express' ? EXPRESS_TARIFF : STANDART_TARIFF;
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
            <Box className={classes.boxWithMap}>
              <OutlineTextField required label="Расстояние" name="distance" fullWidth />
              <PrimaryIconButton
                name="map"
                color="default"
                tooltip="Рассчитать расстояние"
                onClick={() => setOpenMap(true)}
              />
            </Box>
            <OutlineSelect
              className={classes.fullWidth}
              label="Тип доставки"
              name="type"
              value={formValues.type}
              selectItems={typesDelivery}
            />
            <Typography variant="h6">Стоимость доставки: {price()} Руб</Typography>
            <Box className={classes.fullWidth}>
              <PrimaryButton
                name="Отправить"
                type="submit"
                onClick={() => setFieldValue('price', price())}
              />
              {openMap && (
                <YandexMap
                  setDistance={() => {
                    setFieldValue('distance', props.distance);
                    setOpenMap(false);
                  }}
                />
              )}
            </Box>
          </Form>
        );
      }}
    />
  );
};

export default OrderForm;
